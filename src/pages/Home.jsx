import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Stack
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  School as SchoolIcon,
  Work as WorkIcon,
  Event as EventIcon,
  Dashboard as DashboardIcon
} from '@mui/icons-material';

const features = [
  {
    icon: SchoolIcon,
    title: 'Training Programs',
    description: 'Access industry-relevant courses and certifications to enhance your skills.',
    link: '/training'
  },
  {
    icon: WorkIcon,
    title: 'Placement Portal',
    description: 'Explore job opportunities and connect with top companies.',
    link: '/placement'
  },
  {
    icon: DashboardIcon,
    title: 'Student Dashboard',
    description: 'Track your applications and manage your profile in one place.',
    link: '/dashboard'
  },
  {
    icon: EventIcon,
    title: 'Events & Workshops',
    description: 'Participate in workshops, webinars, and networking events.',
    link: '/events'
  }
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700
                }}
              >
                Shape Your Future Career
              </Typography>
              <Typography variant="h2" sx={{ mb: 4, fontSize: '1.5rem' }}>
                Your gateway to professional success through expert training and placement opportunities
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={RouterLink}
                  to="/training"
                >
                  Explore Programs
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  component={RouterLink}
                  to="/about"
                >
                  Learn More
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Add hero image or illustration here */}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 600 }}
        >
          Empowering Your Career Journey
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    <feature.icon
                      sx={{ fontSize: 48, color: 'primary.main' }}
                    />
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    align="center"
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" align="center" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    component={RouterLink}
                    to={feature.link}
                    color="primary"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            <Typography variant="h3" gutterBottom>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Join our platform to access exclusive training programs, job opportunities, and career resources.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/dashboard"
            >
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;