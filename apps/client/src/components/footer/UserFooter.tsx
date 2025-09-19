import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'; // אייקון סימן קריאה
import CreditCardIcon from '@mui/icons-material/CreditCard';

const UserFooter: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2,
        px: 2,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        borderTop: '1px solid',
        borderColor: 'divider',
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
        <FavoriteIcon fontSize="small" color="error" />
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

export default UserFooter;
