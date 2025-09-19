import { Request, Response, NextFunction } from 'express';
import { UserRole } from '@shared/types/userTypes.js';
/**
 * מידלוור אימות: מוודא שהמשתמש מאומת ומצרף את פרטי המשתמש לאובייקט ה-Request.
 * @param req אובייקט הבקשה של Express.
 * @param res אובייקט התגובה של Express.
 * @param next פונקציית המידלוור הבאה בשרשרת.
 */
export declare const isAuthenticated: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
/**
 * מידלוור הרשאה לתפקידים ספציפיים.
 * @param allowedRoles מערך של תפקידי משתמש מותרים (לדוגמה: [UserRole.ADMIN, UserRole.BUSINESS])
 */
export declare const authorizeRoles: (allowedRoles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authMiddleware.d.ts.map