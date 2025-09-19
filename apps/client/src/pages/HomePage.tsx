    // src/pages/HomePage.tsx
    import React, { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { useAppSelector } from "../redux/hooks";
import { 
  Box,
  Typography,
  Grid,
  Container
} from "@mui/material";
import MarketingHero from "../components/MarketingHero";
import SEO from "../components/SEO";
import AnimatedCard from "../components/AnimatedCard";
import { useTranslation } from "react-i18next";

    // הרחבת ה-Card interface
    interface Card {
      id: string;
      name: string; 
      description: string; 
      image: string;
      isFavorite: boolean;
      phone: string;     
      address: string;   
      cardNumber: string; 
    }

    const HomePage: React.FC = () => {
      const [cards, setCards] = useState<Card[]>([]);
      const navigate = useNavigate();
      const user = useAppSelector((state) => state.auth.user);
      const { t } = useTranslation();

      // Redirect business user to business-portal
      useEffect(() => {
        if (user?.role === 'business') {
          navigate('/business-portal/my-cards', { replace: true });
        }
      }, [user, navigate]);

      useEffect(() => {
        // נתוני כרטיסי עסקים מלאים בעברית, כולל פרטי קשר
        setCards([
          {
            id: "123",
            name: "מסעדת שף",
            description: "מטבח עילי באווירה אינטימית",
            image: "/images/card.png",
            isFavorite: false,
            phone: "050-1234567",
            address: "רחוב השף 10, תל אביב",
            cardNumber: "1234567",
          },
          {
            id: "456",
            name: "ספריית ילדים",
            description: "מבחר ספרים לכל גיל",
            image: "/images/card2.png",
            isFavorite: false,
            phone: "050-2345678",
            address: "שדרות הספר 5, ירושלים",
            cardNumber: "2345678",
          },
          {
            id: "789",
            name: "מכון כושר",
            description: "אימונים קבוצתיים וייעוץ תזונתי",
            image: "/images/card4.png",
            isFavorite: false,
            phone: "050-3456789",
            address: "דרך הכושר 20, חיפה",
            cardNumber: "3456789",
          },
        ]);
      }, []);

      const canEdit = user?.role === "business" || user?.role === "admin";

      const displayCards = cards; 

      return (
        <Box>
          <SEO 
            title={t('welcome')}
            description={t('metaDescription')}
            keywords="business cards, digital cards, professional cards, networking"
          />
          <MarketingHero />
          
          <Container maxWidth="lg" sx={{ py: 4, direction: 'rtl' }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: 24, sm: 32, md: 36 } }}>
                {t('welcome')}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom sx={{ fontSize: { xs: 16, sm: 20 } }}>
                {t('tagline')}
              </Typography>
            </Box>

          <Grid container spacing={3} justifyContent="center">
            {displayCards.length > 0 ? (
              displayCards.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={card.id} sx={{ display: 'flex', width: '100%' }}>
                  <AnimatedCard
                    card={card}
                    canEdit={canEdit}
                    onEdit={(id) => navigate(`/edit/${id}`)}
                    onDelete={() => alert(`Delete card: ${card.name}`)}
                    onCall={(phone) => alert(`Calling: ${phone}`)}
                    index={index}
                  />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', width: '100%' }}>
                  {t('noCardsAvailable')}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Container>
        </Box>
      );
    };

    export default HomePage;
    