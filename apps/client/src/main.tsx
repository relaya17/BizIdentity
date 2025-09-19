    // src/main.tsx
    import React from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App";
    import { BrowserRouter } from "react-router-dom";
    import { Provider } from "react-redux";
    import { store } from "./redux/store"; 
    import { CustomThemeProvider } from "./theme/ThemeContext";
    import "./styles/main.scss";
    import "./i18n"; 

    // Register Service Worker for PWA functionality
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }

    ReactDOM.createRoot(document.getElementById("root")!).render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <CustomThemeProvider>
              <App />
            </CustomThemeProvider>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    );
    