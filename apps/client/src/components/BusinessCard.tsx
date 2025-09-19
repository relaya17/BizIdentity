import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

interface BusinessCardProps {
  business: {
    _id: string;
    title: string;
    description: string;
    image: string;
    phone: string;
    address: string;
    likedBy?: string[];
  };
  onToggleFavorite?: (id: string) => void;
  userRole?: 'user' | 'business' | 'admin'; // סוג המשתמש שמחובר
}

const BusinessCard: React.FC<BusinessCardProps> = ({
  business,
  onToggleFavorite,
  userRole,
}) => {
  const { title, description, image, phone, address, _id, likedBy } = business;
  const navigate = useNavigate();

  const isFavorited = likedBy && likedBy.length > 0;

  return (
    <Card
      sx={{ maxWidth: 345, margin: "auto" }}
      role="region"
      aria-label={`Business card for ${title}`}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={`Image representing ${title}`}
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Typography variant="body2" aria-label={`Phone number: ${phone}`}>
          📞 {phone}
        </Typography>
        <Typography variant="body2" aria-label={`Address: ${address}`}>
          📍 {address}
        </Typography>
        <Typography variant="body2" color="text.secondary" aria-label={`Card number: ${_id}`}>
          Card Number: {_id}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <IconButton
          aria-label={`Call ${title}`}
          component="a"
          href={`tel:${phone}`}
        >
          <PhoneIcon />
        </IconButton>

        <IconButton
          aria-label={`${isFavorited ? "Remove from" : "Add to"} favorites`}
          onClick={() => onToggleFavorite && onToggleFavorite(_id)}
          color={isFavorited ? "error" : "default"}
        >
          <FavoriteIcon />
        </IconButton>

        <IconButton
          aria-label={`More info about ${title}`}
          onClick={() => navigate(`/business/${_id}`)}
        >
          <InfoIcon />
        </IconButton>
      </CardActions>
      {/* שורת אייקונים בתחתית הכרטיס - מותנה לפי סוג המשתמש */}
      <CardActions sx={{ justifyContent: "center", gap: 2 }}>
        {userRole === 'admin' && (
          <AdminPanelSettingsIcon color="primary" titleAccess="אדמין" />
        )}
        {userRole === 'business' && (
          <BusinessCenterIcon color="success" titleAccess="עסק" />
        )}
        {userRole === 'user' && (
          <FavoriteIcon color={isFavorited ? "error" : "action"} titleAccess="משתמש רגיל" />
        )}
        <IconButton aria-label="התקשר" component="a" href={`tel:${phone}`}> 
          <PhoneIcon color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BusinessCard;
