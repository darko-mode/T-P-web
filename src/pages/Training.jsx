import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Rating,
  Divider
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  Person as PersonIcon,
  Star as StarIcon
} from '@mui/icons-material';

const trainingPrograms = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    description: 'Master modern web technologies and build responsive, scalable applications.',
    duration: '12 weeks',
    instructor: 'John Smith',
    rating: 4.8,
    reviews: 245,
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    level: 'Intermediate',
    price: '$599'
  },
  {
    id: 2,
    title: 'Data Science & Analytics',
    description: 'Learn data analysis, visualization, and machine learning techniques.',
    duration: '16 weeks',
    instructor: 'Dr. Lisa Chen',
    rating: 4.9,
    reviews: 189,
    skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics'],
    level: 'Advanced',
    price: '$799'
  },
  {
    id: 3,
    title: 'Cloud Computing',
    description: 'Explore cloud platforms, services, and deployment strategies.',
    duration: '10 weeks',
    instructor: 'Mike Johnson',
    rating: 4.7,
    reviews: 156,
    skills: ['AWS', 'Azure', 'DevOps', 'Docker', 'Kubernetes'],
    level: 'Intermediate',
    price: '$699'
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Master digital marketing strategies and tools for business growth.',
    duration: '8 weeks',
    instructor: 'Sarah Williams',
    rating: 4.6,
    reviews: 178,
    skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics', 'PPC'],
    level: 'Beginner',
    price: '$499'
  }
];

const Training = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Training Programs
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Enhance your skills with our industry-focused training programs and certifications.
          </Typography>
        </Box>

        {/* Programs Grid */}
        <Grid container spacing={4}>
          {trainingPrograms.map((program) => (
            <Grid item xs={12} md={6} key={program.id}>
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
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {program.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {program.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon
                        sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                      />
                      {program.duration}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <PersonIcon
                        sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                      />
                      {program.instructor}
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Rating
                      value={program.rating}
                      readOnly
                      precision={0.1}
                      size="small"
                    />
                    <Typography variant="body2" color="text.secondary">
                      ({program.reviews} reviews)
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                    {program.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{ mb: 1 }}
                      />
                    ))}
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Chip
                      label={program.level}
                      color="primary"
                      variant="outlined"
                    />
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    >
                      {program.price}
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                  >
                    Enroll Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Information */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Why Choose Our Programs?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Industry-Relevant Curriculum
                </Typography>
                <Typography color="text.secondary">
                  Our programs are designed in collaboration with industry experts to meet current market demands.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Expert Instructors
                </Typography>
                <Typography color="text.secondary">
                  Learn from experienced professionals with proven expertise in their respective fields.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Hands-on Projects
                </Typography>
                <Typography color="text.secondary">
                  Apply your learning through practical projects and build a strong portfolio.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Training;