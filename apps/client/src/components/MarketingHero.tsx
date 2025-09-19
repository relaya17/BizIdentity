import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
} from '@mui/material';
import {
  Business as BusinessIcon,
  Speed as SpeedIcon,
  Palette as PaletteIcon,
  Share as ShareIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Fast Creation',
    description: 'Create professional cards in minutes',
    color: '#FF6B6B',
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    title: 'Customizable',
    description: 'Beautiful templates and designs',
    color: '#4ECDC4',
  },
  {
    icon: <ShareIcon sx={{ fontSize: 40 }} />,
    title: 'Easy Sharing',
    description: 'Share instantly via QR code or link',
    color: '#45B7D1',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Secure',
    description: 'Your data is safe and private',
    color: '#96CEB4',
  },
  {
    icon: <SupportIcon sx={{ fontSize: 40 }} />,
    title: '24/7 Support',
    description: 'We\'re here to help you succeed',
    color: '#FFEAA7',
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    title: 'Professional',
    description: 'Make a lasting impression',
    color: '#DDA0DD',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    avatar: 'SJ',
    content: 'BizIdentity transformed how we share contact information. Our team productivity increased by 40%!',
    rating: 5,
  },
  {
    name: 'דוד כהן',
    role: 'מנהל מכירות',
    company: 'עסקים בע"מ',
    avatar: 'דכ',
    content: 'הפלטפורמה הכי טובה שראיתי! קל לשימוש ומקצועי מאוד.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Freelancer',
    company: 'Creative Studio',
    avatar: 'EC',
    content: 'Beautiful designs and super easy to use. My clients love the professional look!',
    rating: 5,
  },
];

const MarketingHero: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Chip
                    label="🚀 New: AI-Powered Templates"
                    sx={{
                      mb: 2,
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                  <Typography
                    variant={isMobile ? 'h3' : 'h2'}
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.2,
                      mb: 3,
                    }}
                  >
                    {t('welcome')}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      opacity: 0.9,
                      lineHeight: 1.6,
                    }}
                  >
                    {t('tagline')}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: 'white',
                        color: theme.palette.primary.main,
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {t('getStarted')}
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: 'white',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                        },
                      }}
                    >
                      {t('learnMore')}
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide direction="left" in timeout={1200}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 300, md: 400 },
                      height: { xs: 200, md: 250 },
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    <Typography variant="h4" sx={{ opacity: 0.8 }}>
                      📱 Preview
                    </Typography>
                  </Box>
                </Box>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            {t('features')}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Everything you need to create stunning business cards that make an impact
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in timeout={800 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardContent>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        backgroundColor: feature.color,
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              {t('testimonials')}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              What our customers are saying
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in timeout={1000 + index * 200}>
                  <Card sx={{ height: '100%', p: 3 }}>
                    <CardContent>
                      <Box display="flex" alignItems="center" mb={2}>
                        <Avatar sx={{ mr: 2, backgroundColor: theme.palette.primary.main }}>
                          {testimonial.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role} at {testimonial.company}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                        "{testimonial.content}"
                      </Typography>
                      <Box display="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Typography key={i} sx={{ color: '#FFD700' }}>
                            ⭐
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default MarketingHero;
