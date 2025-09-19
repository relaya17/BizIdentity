import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      profile: 'Profile',
      dashboard: 'Dashboard',
      admin: 'Admin',
      business: 'Business',
      
      // Business Card
      createCard: 'Create Business Card',
      editCard: 'Edit Card',
      viewCards: 'View Cards',
      myCards: 'My Cards',
      allCards: 'All Cards',
      favorites: 'Favorites',
      
      // Form Fields
      title: 'Title',
      subtitle: 'Subtitle',
      description: 'Description',
      phone: 'Phone',
      email: 'Email',
      website: 'Website',
      address: 'Address',
      country: 'Country',
      state: 'State',
      city: 'City',
      street: 'Street',
      houseNumber: 'House Number',
      zipCode: 'Zip Code',
      imageUrl: 'Image URL',
      imageAlt: 'Image Description',
      
      // Actions
      submit: 'Submit',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      refresh: 'Refresh',
      
      // Messages
      success: 'Success',
      error: 'Error',
      warning: 'Warning',
      info: 'Information',
      loading: 'Loading...',
      noData: 'No data available',
      cardCreated: 'Business card created successfully!',
      cardUpdated: 'Business card updated successfully!',
      cardDeleted: 'Business card deleted successfully!',
      
      // Validation
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      invalidPhone: 'Phone number must be 10 digits',
      minLength: 'Minimum {{count}} characters required',
      maxLength: 'Maximum {{count}} characters allowed',
      
      // Marketing
      welcome: 'Welcome to BizIdentity',
      tagline: 'Create stunning business cards in minutes',
      features: 'Features',
      pricing: 'Pricing',
      testimonials: 'Testimonials',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      freeTrial: 'Free Trial',
      
      // SEO
      metaTitle: 'BizIdentity - Professional Business Cards',
      metaDescription: 'Create beautiful, professional business cards online. Easy to use, customizable templates, and instant sharing.',
    }
  },
  he: {
    translation: {
      // Navigation
      home: 'בית',
      about: 'אודות',
      contact: 'צור קשר',
      login: 'התחבר',
      register: 'הרשמה',
      logout: 'התנתק',
      profile: 'פרופיל',
      dashboard: 'לוח בקרה',
      admin: 'מנהל',
      business: 'עסק',
      
      // Business Card
      createCard: 'צור כרטיס ביקור',
      editCard: 'ערוך כרטיס',
      viewCards: 'צפה בכרטיסים',
      myCards: 'הכרטיסים שלי',
      allCards: 'כל הכרטיסים',
      favorites: 'מועדפים',
      
      // Form Fields
      title: 'כותרת',
      subtitle: 'כותרת משנה',
      description: 'תיאור',
      phone: 'טלפון',
      email: 'אימייל',
      website: 'אתר אינטרנט',
      address: 'כתובת',
      country: 'מדינה',
      state: 'מחוז',
      city: 'עיר',
      street: 'רחוב',
      houseNumber: 'מספר בית',
      zipCode: 'מיקוד',
      imageUrl: 'קישור לתמונה',
      imageAlt: 'תיאור התמונה',
      
      // Actions
      submit: 'שלח',
      cancel: 'בטל',
      save: 'שמור',
      delete: 'מחק',
      edit: 'ערוך',
      view: 'צפה',
      search: 'חפש',
      filter: 'סנן',
      sort: 'מיין',
      refresh: 'רענן',
      
      // Messages
      success: 'הצלחה',
      error: 'שגיאה',
      warning: 'אזהרה',
      info: 'מידע',
      loading: 'טוען...',
      noData: 'אין נתונים זמינים',
      cardCreated: 'כרטיס ביקור נוצר בהצלחה!',
      cardUpdated: 'כרטיס ביקור עודכן בהצלחה!',
      cardDeleted: 'כרטיס ביקור נמחק בהצלחה!',
      
      // Validation
      required: 'שדה זה נדרש',
      invalidEmail: 'נא להזין כתובת אימייל תקינה',
      invalidPhone: 'מספר הטלפון חייב להכיל 10 ספרות',
      minLength: 'נדרשים לפחות {{count}} תווים',
      maxLength: 'מותר מקסימום {{count}} תווים',
      
      // Marketing
      welcome: 'ברוכים הבאים ל-BizIdentity',
      tagline: 'צרו כרטיסי ביקור מרהיבים תוך דקות',
      features: 'תכונות',
      pricing: 'מחירים',
      testimonials: 'המלצות',
      getStarted: 'התחל עכשיו',
      learnMore: 'למד עוד',
      freeTrial: 'ניסיון חינם',
      
      // SEO
      metaTitle: 'BizIdentity - כרטיסי ביקור מקצועיים',
      metaDescription: 'צרו כרטיסי ביקור יפים ומקצועיים באינטרנט. קל לשימוש, תבניות מותאמות אישית ושיתוף מיידי.',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
