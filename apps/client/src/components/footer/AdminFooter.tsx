// src/components/footer/AdminFooter.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SandboxIcon from '@mui/icons-material/AllInbox';

const AdminFooter: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2,
        px: 2,
        bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'primary.dark',
        color: 'white',
        borderTop: '1px solid',
        borderColor: 'primary.light',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        width: '100%',
      }}
    >
      {/* אודות */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <InfoIcon fontSize="small" />
        <Typography variant="body2">About</Typography>
      </Box>
      {/* מועדפים */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <FavoriteIcon fontSize="small" />
        <Typography variant="body2">Favorites</Typography>
      </Box>
      {/* הכרטיסים שלי */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CreditCardIcon fontSize="small" />
        <Typography variant="body2">My Cards</Typography>
      </Box>
      {/* Sandbox */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SandboxIcon fontSize="small" />
        <Typography variant="body2">Sandbox</Typography>
      </Box>
    </Box>
  );
};

export default AdminFooter;
