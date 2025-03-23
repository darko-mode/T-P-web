import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon
} from '@mui/icons-material';

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', path: '/' },
        { text: 'About Us', path: '/about' },
        { text: 'Training Programs', path: '/training' },
        { text: 'Placement Portal', path: '/placement' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { text: 'Student Dashboard', path: '/dashboard' },
        { text: 'Events & Workshops', path: '/events' },
        { text: 'Success Stories', path: '/testimonials' },
        { text: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Contact Info',
      content: [
        'Training & Placement Cell',
        'Example University',
        'Email: contact@example.com',
        'Phone: +1 234 567 890'
      ]
    }
  ];

  const socialLinks = [
    { icon: FacebookIcon, url: 'https://facebook.com' },
    { icon: TwitterIcon, url: 'https://twitter.com' },
    { icon: LinkedInIcon, url: 'https://linkedin.com' },
    { icon: InstagramIcon, url: 'https://instagram.com' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              {section.links ? (
                <Box>
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      component={RouterLink}
                      to={link.path}
                      color="inherit"
                      sx={{
                        display: 'block',
                        mb: 1,
                        '&:hover': { color: 'secondary.light' }
                      }}
                    >
                      {link.text}
                    </Link>
                  ))}
                </Box>
              ) : (
                <Box>
                  {section.content.map((text, contentIndex) => (
                    <Typography
                      key={contentIndex}
                      variant="body2"
                      sx={{ mb: 1 }}
                    >
                      {text}
                    </Typography>
                  ))}
                </Box>
              )}
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.12)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, md: 0 } }}>
            © {new Date().getFullYear()} Training & Placement Portal. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': { color: 'secondary.light' }
                }}
              >
                <social.icon />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;