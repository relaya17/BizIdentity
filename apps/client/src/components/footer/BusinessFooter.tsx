// src/components/footer/BusinessFooter.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const BusinessFooter: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2,
        px: 2,
        bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'success.dark',
        color: 'white',
        borderTop: '1px solid',
        borderColor: 'success.light',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        width: '100%',
      }}
    >
      {/* About */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <InfoIcon fontSize="small" />
        <Typography variant="body2">About</Typography>
      </Box>
      {/* Favorites */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <FavoriteIcon fontSize="small" />
        <Typography variant="body2">Favorites</Typography>
      </Box>
      {/* My Cards */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CreditCardIcon fontSize="small" />
        <Typography variant="body2">My Cards</Typography>
      </Box>
    </Box>
  );
};

export default BusinessFooter;
