import React, { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

// Lazy loading wrapper with loading fallback
const LazyWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense
    fallback={
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        <CircularProgress />
      </Box>
    }
  >
    {children}
  </Suspense>
);

// Lazy loaded components
export const LazyHomePage = React.lazy(() => import('../pages/HomePage'));
export const LazyAboutPage = React.lazy(() => import('../pages/About'));
export const LazyCardsPage = React.lazy(() => import('../pages/CardsPage'));
export const LazyCreateCardPage = React.lazy(() => import('../pages/CreateCardPage'));
export const LazyProfilePage = React.lazy(() => import('../pages/ProfilePage'));
export const LazyCRM = React.lazy(() => import('../pages/CRM'));

// Wrapped components with loading states
export const HomePage = () => (
  <LazyWrapper>
    <LazyHomePage />
  </LazyWrapper>
);

export const AboutPage = () => (
  <LazyWrapper>
    <LazyAboutPage />
  </LazyWrapper>
);

export const CardsPage = () => (
  <LazyWrapper>
    <LazyCardsPage />
  </LazyWrapper>
);

export const CreateCardPage = () => (
  <LazyWrapper>
    <LazyCreateCardPage />
  </LazyWrapper>
);

export const ProfilePage = () => (
  <LazyWrapper>
    <LazyProfilePage />
  </LazyWrapper>
);

export const CRM = () => (
  <LazyWrapper>
    <LazyCRM />
  </LazyWrapper>
);
