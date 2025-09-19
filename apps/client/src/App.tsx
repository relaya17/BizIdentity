    // src/App.tsx
    import React, { useEffect } from 'react';
    import { CssBaseline, Box } from '@mui/material';
    import { useAppSelector, useAppDispatch } from './redux/hooks'; 
    import AppRouter from './routes/AppRouter';
    import { loadUserFromTokenThunk } from './redux/thunks/authThunks';
import Analytics from './components/Analytics';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import './i18n';

    // 🆕 ייבוא כל קבצי הפוטר הנדרשים:
    import GuestFooter from './components/footer/GuestFooter'; // הפוטר לאורח (לא מחובר)
    import UserFooter from './components/footer/UserFooter';   // הפוטר למשתמש רגיל מחובר
    import AdminFooter from './components/footer/AdminFooter'; 
    import BusinessFooter from './components/footer/BusinessFooter'; 

    const App = () => {
      const { isAuthenticated, user } = useAppSelector((state) => state.auth);
      const dispatch = useAppDispatch();

      useEffect(() => {
        dispatch(loadUserFromTokenThunk());
      }, [dispatch]);

      let CurrentFooterComponent: React.ElementType; 

      // 🆕 לוגיקה מדויקת לבחירת קומפוננטת הפוטר לפי 4 המצבים:
      if (isAuthenticated) {
        if (user?.role === 'admin') {
          CurrentFooterComponent = AdminFooter;
        } else if (user?.role === 'business') {
          CurrentFooterComponent = BusinessFooter;
        } else {
          // 🆕 משתמש רגיל מחובר (role הוא 'user')
          CurrentFooterComponent = UserFooter; 
        }
      } else {
        // 🆕 אורח (לא מחובר כלל)
        CurrentFooterComponent = GuestFooter; 
      }

      return (
        <ErrorBoundary>
          <SEO />
          <CssBaseline /> 
          <Analytics />
          <PerformanceMonitor />
          
          <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh" 
            bgcolor="background.default" 
            color="text.primary"        
          >
            <Box flex="1">
              <AppRouter /> 
            </Box>
            
            <CurrentFooterComponent /> {/* מרנדרים את הפוטר שנבחר */}
          </Box>
        </ErrorBoundary>
      );
    };

    export default App;
    