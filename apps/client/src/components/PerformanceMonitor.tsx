import React, { useEffect } from 'react';

// Performance monitoring component
const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const monitorWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
          
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'LCP',
              value: Math.round(lastEntry.startTime),
            });
          }
        });
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observer not supported');
        }
      }

      // First Input Delay (FID)
      if ('PerformanceObserver' in window) {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            console.log('FID:', entry.processingStart - entry.startTime);
            
            // Send to analytics
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
              });
            }
          });
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observer not supported');
        }
      }

      // Cumulative Layout Shift (CLS)
      if ('PerformanceObserver' in window) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          console.log('CLS:', clsValue);
          
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(clsValue * 1000),
            });
          }
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer not supported');
        }
      }
    };

    // Monitor page load performance
    const monitorPageLoad = () => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (navigation) {
            const metrics = {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              firstByte: navigation.responseStart - navigation.requestStart,
              domInteractive: navigation.domInteractive - navigation.navigationStart,
              totalLoadTime: navigation.loadEventEnd - navigation.navigationStart,
            };
            
            console.log('Page Load Metrics:', metrics);
            
            // Send to analytics
            if (window.gtag) {
              Object.entries(metrics).forEach(([key, value]) => {
                window.gtag('event', 'page_load_metric', {
                  event_category: 'Performance',
                  event_label: key,
                  value: Math.round(value),
                });
              });
            }
          }
        }, 0);
      });
    };

    // Monitor resource loading
    const monitorResources = () => {
      if ('PerformanceObserver' in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.duration > 1000) { // Log slow resources (>1s)
              console.warn('Slow resource:', entry.name, entry.duration);
            }
          });
        });
        
        try {
          resourceObserver.observe({ entryTypes: ['resource'] });
        } catch (e) {
          console.warn('Resource observer not supported');
        }
      }
    };

    // Monitor memory usage (if available)
    const monitorMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        console.log('Memory usage:', {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024),
        });
      }
    };

    // Initialize monitoring
    monitorWebVitals();
    monitorPageLoad();
    monitorResources();
    
    // Monitor memory every 30 seconds
    const memoryInterval = setInterval(monitorMemory, 30000);
    
    // Monitor memory on page unload
    const handleBeforeUnload = () => {
      monitorMemory();
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      clearInterval(memoryInterval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};

// Hook for measuring component render time
export const useRenderTime = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      console.log(`${componentName} render time:`, renderTime);
      
      if (renderTime > 16) { // Log slow renders (>16ms)
        console.warn(`Slow render detected in ${componentName}:`, renderTime);
      }
    };
  });
};

// Hook for measuring async operations
export const useAsyncTimer = () => {
  const startTimer = (operationName: string) => {
    const startTime = performance.now();
    
    return {
      end: () => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        console.log(`${operationName} took:`, duration);
        
        if (window.gtag) {
          window.gtag('event', 'async_operation', {
            event_category: 'Performance',
            event_label: operationName,
            value: Math.round(duration),
          });
        }
        
        return duration;
      }
    };
  };
  
  return { startTimer };
};

export default PerformanceMonitor;
