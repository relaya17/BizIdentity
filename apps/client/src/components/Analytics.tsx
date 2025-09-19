import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Analytics tracking component
const Analytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: location.pathname + location.search,
        });
      }
      
      // Custom analytics tracking
      console.log('Page view:', location.pathname);
      
      // Send to custom analytics endpoint
      fetch('/api/analytics/pageview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          path: location.pathname,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        }),
      }).catch(console.error);
    };

    trackPageView();
  }, [location]);

  return null;
};

// Event tracking hook
export const useAnalytics = () => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
    
    // Custom event tracking
    console.log('Event tracked:', eventName, parameters);
    
    fetch('/api/analytics/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: eventName,
        parameters,
        timestamp: new Date().toISOString(),
      }),
    }).catch(console.error);
  };

  const trackCardCreation = (cardData: any) => {
    trackEvent('card_created', {
      card_type: 'business_card',
      has_image: !!cardData.imageUrl,
      country: cardData.country,
    });
  };

  const trackCardView = (cardId: string) => {
    trackEvent('card_viewed', {
      card_id: cardId,
    });
  };

  const trackUserRegistration = (userType: string) => {
    trackEvent('user_registered', {
      user_type: userType,
    });
  };

  const trackUserLogin = (userType: string) => {
    trackEvent('user_logged_in', {
      user_type: userType,
    });
  };

  return {
    trackEvent,
    trackCardCreation,
    trackCardView,
    trackUserRegistration,
    trackUserLogin,
  };
};

export default Analytics;
