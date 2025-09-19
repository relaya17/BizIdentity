import React from 'react';
import { Card, CardContent, CardMedia, Box, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';

interface AnimatedCardProps {
  card: {
    id: string;
    name: string;
    description: string;
    image: string;
    phone: string;
    address: string;
    cardNumber: string;
  };
  canEdit: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCall: (phone: string) => void;
  index: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  card,
  canEdit,
  onEdit,
  onDelete,
  onCall,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 350,
          mx: 'auto',
          height: '100%',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          boxShadow: 3,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 6,
            borderColor: 'primary.main',
          },
          direction: 'rtl',
          background: '#fff',
          p: 0,
        }}
      >
        <Box sx={{ width: '100%', height: 220, overflow: 'hidden' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <CardMedia
              component="img"
              image={card.image}
              alt={card.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0',
                ...(card.name === 'מכון כושר' ? { objectPosition: 'center top' } : {}),
              }}
            />
          </motion.div>
        </Box>
        
        <CardContent sx={{ flexGrow: 1, p: 2, background: '#fff' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Typography variant="h6" sx={{ mt: 0, fontWeight: 'bold', textAlign: 'right' }}>
              {card.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ minHeight: 40, textAlign: 'right' }}>
              {card.description}
            </Typography>
            <Box sx={{ mt: 2, textAlign: 'left', direction: 'ltr' }}>
              <Typography variant="body2" color="text.primary">
                טלפון: {card.phone}
              </Typography>
              <Typography variant="body2" color="text.primary">
                כתובת: {card.address}
              </Typography>
              <Typography variant="body2" color="text.primary">
                מספר כרטיס: {card.cardNumber}
              </Typography>
            </Box>
          </motion.div>
        </CardContent>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 1,
            py: 1,
            borderTop: '1px solid',
            borderColor: 'divider',
            mt: 'auto',
            px: 2,
          }}
        >
          {canEdit && (
            <>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  onClick={() => onEdit(card.id)}
                  aria-label="ערוך"
                  color="info"
                >
                  <EditIcon />
                </IconButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <IconButton
                  onClick={() => onDelete(card.id)}
                  aria-label="מחק"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </motion.div>
            </>
          )}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <IconButton
              onClick={() => onCall(card.phone)}
              aria-label="התקשר"
              color="primary"
            >
              <PhoneIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
