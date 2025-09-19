# מערכת ניהול משתמשים - User Management System

## תיאור הפרויקט

מערכת ניהול משתמשים מתקדמת הבנויה כמונורפו (Monorepo) עם React, Node.js, TypeScript ו-MongoDB. המערכת כוללת מערכת אימות מלאה, ניהול תפקידים, העלאת קבצים, וממשק משתמש רספונסיבי ונגיש.

## 🏗️ ארכיטקטורה

### מבנה הפרויקט
```
usermengment/
├── apps/
│   ├── client/          # React Frontend
│   └── server/          # Node.js Backend
├── packages/
│   └── shared/          # Types משותפים
├── package.json         # Root package.json
├── pnpm-workspace.yaml  # pnpm workspace config
└── turbo.json          # Turbo build config
```

### טכנולוגיות

#### Frontend (Client)
- **React 18** - ספריית UI
- **TypeScript** - טיפוסים בטוחים
- **Material-UI (MUI)** - רכיבי UI
- **Redux Toolkit** - ניהול state
- **React Router** - ניווט
- **Vite** - Build tool
- **SCSS** - עיצוב

#### Backend (Server)
- **Node.js** - Runtime
- **Express.js** - Web framework
- **TypeScript** - טיפוסים בטוחים
- **MongoDB** - מסד נתונים
- **Mongoose** - ODM
- **JWT** - אימות
- **Multer** - העלאת קבצים
- **Joi** - ולידציה

#### כלים נוספים
- **pnpm** - Package manager
- **Turbo** - Build system
- **ESLint** - Code linting

## 🚀 התקנה והפעלה

### דרישות מוקדמות
- Node.js 18+
- pnpm 8+
- MongoDB

### התקנה
```bash
# Clone הפרויקט
git clone <repository-url>
cd usermengment

# התקנת dependencies
pnpm install

# יצירת קובץ .env
cp .env.example .env
# ערוך את הקובץ עם הפרטים שלך
```

### הגדרת משתני סביבה
צור קובץ `.env` בשורש הפרויקט:
```env
# MongoDB
MONGO_URI=mongodb://localhost:27017/usermengment

# JWT
JWT_SECRET=your-super-secret-jwt-key

# Server
PORT=5000
NODE_ENV=development
```

### הפעלה
```bash
# הפעלת כל הפרויקט (client + server)
pnpm dev

# או הפעלה נפרדת:
pnpm dev:client  # רק frontend
pnpm dev:server  # רק backend
```

## 📁 מבנה מפורט

### Client (Frontend)
```
apps/client/src/
├── components/          # רכיבים משותפים
│   ├── footer/         # פוטרים לפי תפקיד
│   └── cards/          # רכיבי כרטיסים
├── layouts/            # לייאאוטים שונים
├── pages/              # דפי האפליקציה
├── redux/              # Redux store ו-slices
├── routes/             # הגדרות routing
├── services/           # API calls
├── styles/             # SCSS files
└── theme/              # Material-UI theme
```

### Server (Backend)
```
apps/server/src/
├── controllers/        # Controllers
├── middlewares/        # Middleware functions
├── models/            # Mongoose models
├── routes/            # API routes
├── services/          # Business logic
└── types/             # TypeScript types
```

### Shared Package
```
packages/shared/src/
└── types/             # Types משותפים
    ├── userTypes.ts   # User interfaces
    └── api.ts         # API types
```

## 🔐 מערכת אימות ובטיחות

### תכונות בטיחות
- **JWT Authentication** - אימות מבוסס טוקנים
- **Password Hashing** - הצפנת סיסמאות עם bcrypt
- **Role-based Access Control** - בקרת גישה לפי תפקידים
- **Input Validation** - ולידציה עם Joi
- **File Upload Security** - הגבלת סוגי קבצים וגודל
- **CORS Protection** - הגנה מפני CORS attacks
- **Error Handling** - טיפול מרכזי בשגיאות

### תפקידים במערכת
- **Guest** - אורח (לא מחובר)
- **User** - משתמש רגיל
- **Business** - בעל עסק
- **Admin** - מנהל מערכת

## 🎨 עיצוב ונגישות

### תכונות עיצוב
- **Responsive Design** - עיצוב רספונסיבי
- **Dark/Light Mode** - מצבי צבע
- **RTL Support** - תמיכה בעברית
- **Material Design** - עיצוב Material
- **Accessibility** - נגישות (ARIA labels, keyboard navigation)

### Breakpoints
- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px

## 📊 פונקציונליות

### משתמש רגיל
- רישום והתחברות
- צפייה בכרטיסי עסק
- הוספת כרטיסים למועדפים
- ניהול פרופיל אישי

### בעל עסק
- כל הפונקציות של משתמש רגיל
- יצירת כרטיסי עסק
- עריכת כרטיסים
- ניהול לקוחות (CRM)

### מנהל מערכת
- כל הפונקציות הקודמות
- ניהול משתמשים
- גישה לכל המערכת
- דוחות וסטטיסטיקות

## 🛠️ פיתוח

### פקודות שימושיות
```bash
# Build הפרויקט
pnpm build

# Lint
pnpm lint

# Clean
pnpm clean

# Type checking
pnpm type-check
```

### כללי קוד
- **TypeScript Strict Mode** - מופעל
- **ESLint** - כללי linting
- **No 'any' types** - אסור שימוש ב-any
- **Hebrew Comments** - הערות בעברית
- **Consistent Naming** - שמות עקביים

## 🧪 בדיקות

### בדיקות שבוצעו
- ✅ מבנה הפרויקט וקונפיגרציה
- ✅ סינכרון בין client ו-server
- ✅ זיהוי כפילויות וקבצים ריקים
- ✅ בדיקת פונקציונליות
- ✅ נגישות ורספונסיביות
- ✅ מדיניות בטיחות
- ✅ הסרת שימוש ב-'any' type

## 🚀 פריסה

### Development
```bash
pnpm dev
```

### Production
```bash
pnpm build
pnpm start
```

### Docker (אופציונלי)
```bash
docker-compose up -d
```

## 📝 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - רישום משתמש חדש
- `POST /api/auth/login` - התחברות
- `GET /api/users/profile` - קבלת פרופיל משתמש

### User Management
- `GET /api/users` - רשימת משתמשים (Admin)
- `PATCH /api/users/:id/role` - שינוי תפקיד (Admin)
- `DELETE /api/users/:id` - מחיקת משתמש (Admin)

### File Upload
- `POST /api/upload` - העלאת תמונה

## 🤝 תרומה לפרויקט

1. Fork הפרויקט
2. צור branch חדש (`git checkout -b feature/amazing-feature`)
3. Commit השינויים (`git commit -m 'Add amazing feature'`)
4. Push ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## 📄 רישיון

פרויקט זה מופץ תחת רישיון MIT. ראה קובץ `LICENSE` לפרטים נוספים.

## 📞 תמיכה

לשאלות ותמיכה:
- פתח Issue ב-GitHub
- צור קשר עם הצוות

## 🔄 עדכונים עתידיים

- [ ] הוספת בדיקות אוטומטיות
- [ ] שיפור ביצועים
- [ ] הוספת תכונות חדשות
- [ ] שיפור נגישות
- [ ] אופטימיזציה למובייל

---

**נבנה עם ❤️ בישראל**
