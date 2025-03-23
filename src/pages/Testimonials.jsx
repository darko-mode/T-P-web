import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Stack,
  Divider
} from '@mui/material';
import { FormatQuote as FormatQuoteIcon } from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: 'Alex Thompson',
    image: '/testimonials/alex.jpg',
    role: 'Software Engineer at Google',
    batch: '2023 Graduate',
    rating: 5,
    testimonial: 'The training programs were instrumental in helping me land my dream job. The practical projects and mock interviews prepared me well for the industry.',
    company: 'Google',
    package: '$120,000/year'
  },
  {
    id: 2,
    name: 'Priya Patel',
    image: '/testimonials/priya.jpg',
    role: 'Data Scientist at Amazon',
    batch: '2023 Graduate',
    rating: 5,
    testimonial: 'The data science course and placement support helped me transition into analytics. The mentors were extremely helpful throughout the process.',
    company: 'Amazon',
    package: '$115,000/year'
  },
  {
    id: 3,
    name: 'James Wilson',
    image: '/testimonials/james.jpg',
    role: 'Product Designer at Apple',
    batch: '2022 Graduate',
    rating: 4,
    testimonial: 'The UX/UI design program gave me practical exposure to industry tools and practices. The portfolio building sessions were particularly valuable.',
    company: 'Apple',
    package: '$110,000/year'
  },
  {
    id: 4,
    name: 'Sarah Chen',
    image: '/testimonials/sarah.jpg',
    role: 'Cloud Engineer at Microsoft',
    batch: '2023 Graduate',
    rating: 5,
    testimonial: 'The cloud computing certification and hands-on projects helped me stand out during interviews. Great learning experience overall!',
    company: 'Microsoft',
    package: '$125,000/year'
  }
];

const statistics = [
  {
    label: 'Placement Rate',
    value: '95%'
  },
  {
    label: 'Average Package',
    value: '$100K+'
  },
  {
    label: 'Partner Companies',
    value: '500+'
  },
  {
    label: 'Success Stories',
    value: '1000+'
  }
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Success Stories
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Discover how our training and placement programs have helped students achieve their career goals.
          </Typography>
        </Box>

        {/* Statistics Section */}
        <Box sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            {statistics.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    py: 3,
                    height: '100%'
                  }}
                >
                  <Typography
                    variant="h3"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={6} key={testimonial.id}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent>
                  <Stack spacing={3}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}
                    >
                      <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{ width: 80, height: 80 }}
                      />
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          gutterBottom
                        >
                          {testimonial.role}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {testimonial.batch}
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      <FormatQuoteIcon
                        sx={{
                          fontSize: 40,
                          color: 'primary.light',
                          opacity: 0.3,
                          mb: 1
                        }}
                      />
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontStyle: 'italic' }}
                      >
                        {testimonial.testimonial}
                      </Typography>
                    </Box>

                    <Box>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                      >
                        <Rating
                          value={testimonial.rating}
                          readOnly
                          size="small"
                        />
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="body2" color="text.secondary">
                          Placed at {testimonial.company}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{ fontWeight: 600 }}
                        >
                          {testimonial.package}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            bgcolor: 'primary.main',
            color: 'white',
            py: 6,
            px: 2,
            borderRadius: 2
          }}
        >
          <Typography variant="h3" gutterBottom>
            Ready to Write Your Success Story?
          </Typography>
          <Typography
            variant="h6"
            sx={{ maxWidth: 800, mx: 'auto', mb: 2, opacity: 0.9 }}
          >
            Join our training programs and take the first step towards your dream career.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;