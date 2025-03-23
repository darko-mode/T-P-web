import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  IconButton,
  Divider
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: '+1 234 567 890',
    link: 'tel:+1234567890'
  },
  {
    icon: EmailIcon,
    title: 'Email',
    content: 'contact@example.com',
    link: 'mailto:contact@example.com'
  },
  {
    icon: LocationIcon,
    title: 'Address',
    content: '123 University Avenue, City, State 12345',
    link: 'https://maps.google.com'
  }
];

const socialLinks = [
  { icon: FacebookIcon, url: 'https://facebook.com', name: 'Facebook' },
  { icon: TwitterIcon, url: 'https://twitter.com', name: 'Twitter' },
  { icon: LinkedInIcon, url: 'https://linkedin.com', name: 'LinkedIn' },
  { icon: InstagramIcon, url: 'https://instagram.com', name: 'Instagram' }
];

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Get in touch with us for any inquiries about training programs, placement opportunities, or collaborations.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        required
                        type="email"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Contact Information
                  </Typography>
                  <Stack spacing={3} sx={{ mt: 3 }}>
                    {contactInfo.map((info, index) => (
                      <Box key={index}>
                        <Stack
                          direction="row"
                          spacing={2}
                          alignItems="center"
                        >
                          <info.icon
                            sx={{ fontSize: 24, color: 'primary.main' }}
                          />
                          <Box>
                            <Typography
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {info.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              component="a"
                              href={info.link}
                              sx={{
                                color: 'text.primary',
                                textDecoration: 'none',
                                '&:hover': { color: 'primary.main' }
                              }}
                            >
                              {info.content}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Follow Us
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    Stay connected with us on social media for updates and announcements.
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        component="a"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          '&:hover': { color: 'primary.dark' }
                        }}
                        aria-label={social.name}
                      >
                        <social.icon />
                      </IconButton>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Office Hours
                  </Typography>
                  <Stack spacing={1}>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Monday - Friday
                      </Typography>
                      <Typography variant="body1">
                        9:00 AM - 5:00 PM
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Saturday
                      </Typography>
                      <Typography variant="body1">
                        10:00 AM - 2:00 PM
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Sunday
                      </Typography>
                      <Typography variant="body1">
                        Closed
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;