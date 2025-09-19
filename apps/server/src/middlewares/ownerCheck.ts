import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User.js';

// Middleware לבדיקת בעלות על משאב
export const ownerCheck = (resourceIdParam: string = 'id') => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const resourceId = req.params[resourceIdParam];
            const userId = req.user?._id;

            if (!userId) {
                return res.status(401).json({ message: 'לא מאומת' });
            }

            if (!resourceId) {
                return res.status(400).json({ message: 'מזהה משאב חסר' });
            }

            // בדיקה אם המשתמש הוא admin
            if (req.user?.role === 'admin') {
                return next(); // Admin יכול לגשת לכל דבר
            }

            // בדיקה אם המשתמש הוא הבעלים
            if (userId === resourceId) {
                return next();
            }

            // בדיקה נוספת - אם זה כרטיס עסק, בדוק אם המשתמש הוא הבעלים
            // (ניתן להרחיב לפי הצורך)

            return res.status(403).json({ message: 'אין הרשאה לגשת למשאב זה' });
        } catch (error) {
            console.error('שגיאה בבדיקת בעלות:', error);
            return res.status(500).json({ message: 'שגיאה פנימית בשרת' });
        }
    };
};

// Middleware לבדיקת הרשאות יצירת כרטיס
export const canCreateCard = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(401).json({ message: 'לא מאומת' });
    }

    if (req.user.role === 'business' || req.user.role === 'admin') {
        return next();
    }

    return res.status(403).json({ message: 'רק בעלי עסק או מנהלים יכולים ליצור כרטיסים' });
};

// Middleware לבדיקת הרשאות ניהול משתמשים
export const canManageUsers = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        return res.status(401).json({ message: 'לא מאומת' });
    }

    if (req.user.role === 'admin') {
        return next();
    }

    return res.status(403).json({ message: 'רק מנהלים יכולים לנהל משתמשים' });
};
