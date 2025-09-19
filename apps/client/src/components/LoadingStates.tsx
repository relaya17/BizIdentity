import React from 'react';
import { Box, Skeleton, CircularProgress, Typography, LinearProgress } from '@mui/material';

// Skeleton loader for cards
export const CardSkeleton: React.FC = () => (
  <Box sx={{ width: '100%', maxWidth: 350, mx: 'auto' }}>
    <Skeleton variant="rectangular" height={220} sx={{ borderRadius: '8px 8px 0 0' }} />
    <Box sx={{ p: 2 }}>
      <Skeleton variant="text" height={32} width="80%" />
      <Skeleton variant="text" height={20} width="100%" />
      <Skeleton variant="text" height={20} width="60%" />
      <Box sx={{ mt: 2, display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="circular" width={40} height={40} />
      </Box>
    </Box>
  </Box>
);

// Skeleton loader for table rows
export const TableSkeleton: React.FC<{ rows?: number }> = ({ rows = 5 }) => (
  <>
    {Array.from({ length: rows }).map((_, index) => (
      <Box key={index} sx={{ display: 'flex', gap: 2, p: 2, borderBottom: '1px solid #e0e0e0' }}>
        <Skeleton variant="text" width="25%" height={40} />
        <Skeleton variant="text" width="35%" height={40} />
        <Skeleton variant="text" width="20%" height={40} />
        <Skeleton variant="text" width="20%" height={40} />
      </Box>
    ))}
  </>
);

// Loading spinner with message
export const LoadingSpinner: React.FC<{ message?: string; size?: number }> = ({ 
  message = "טוען...", 
  size = 40 
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
    <CircularProgress size={size} />
    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
      {message}
    </Typography>
  </Box>
);

// Progress bar for uploads
export const UploadProgress: React.FC<{ progress: number; message?: string }> = ({ 
  progress, 
  message = "מעלה קובץ..." 
}) => (
  <Box sx={{ width: '100%', p: 2 }}>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
      {message}
    </Typography>
    <LinearProgress 
      variant="determinate" 
      value={progress} 
      sx={{ height: 8, borderRadius: 4 }}
    />
    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
      {Math.round(progress)}%
    </Typography>
  </Box>
);

// Skeleton for profile page
export const ProfileSkeleton: React.FC = () => (
  <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <Skeleton variant="circular" width={80} height={80} sx={{ mr: 2 }} />
      <Box>
        <Skeleton variant="text" width={200} height={32} />
        <Skeleton variant="text" width={150} height={20} />
      </Box>
    </Box>
    <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 2 }} />
    <Skeleton variant="text" width="100%" height={24} />
    <Skeleton variant="text" width="80%" height={24} />
    <Skeleton variant="text" width="60%" height={24} />
  </Box>
);

// Skeleton for form
export const FormSkeleton: React.FC = () => (
  <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
    <Skeleton variant="text" width="60%" height={40} sx={{ mb: 3 }} />
    <Skeleton variant="rectangular" height={56} sx={{ mb: 2, borderRadius: 1 }} />
    <Skeleton variant="rectangular" height={56} sx={{ mb: 2, borderRadius: 1 }} />
    <Skeleton variant="rectangular" height={56} sx={{ mb: 2, borderRadius: 1 }} />
    <Skeleton variant="rectangular" height={120} sx={{ mb: 3, borderRadius: 1 }} />
    <Skeleton variant="rectangular" height={40} width="30%" sx={{ borderRadius: 1 }} />
  </Box>
);

// Loading overlay
export const LoadingOverlay: React.FC<{ open: boolean; message?: string }> = ({ 
  open, 
  message = "טוען..." 
}) => {
  if (!open) return null;
  
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderRadius: 2,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: 200,
        }}
      >
        <CircularProgress size={40} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

// Shimmer effect for loading states
export const ShimmerEffect: React.FC<{ width?: string; height?: string }> = ({ 
  width = '100%', 
  height = '20px' 
}) => (
  <Box
    sx={{
      width,
      height,
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
      '@keyframes shimmer': {
        '0%': {
          backgroundPosition: '-200% 0',
        },
        '100%': {
          backgroundPosition: '200% 0',
        },
      },
    }}
  />
);
