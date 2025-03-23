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
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  AccessTime as AccessTimeIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon
} from '@mui/icons-material';

const events = [
  {
    id: 1,
    title: 'Tech Career Summit 2024',
    type: 'Conference',
    date: 'March 15, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Virtual Event',
    description: 'Join industry leaders for insights into tech careers, networking opportunities, and expert talks on emerging technologies.',
    speakers: ['John Doe - Tech Lead at Google', 'Jane Smith - Senior Developer at Microsoft'],
    topics: ['Career Growth', 'Technology Trends', 'Industry Insights'],
    registrationDeadline: 'March 10, 2024',
    capacity: '500 attendees',
    price: 'Free'
  },
  {
    id: 2,
    title: 'Web Development Bootcamp',
    type: 'Workshop',
    date: 'March 20-22, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'Campus Training Center',
    description: 'Intensive 3-day workshop covering modern web development technologies, best practices, and hands-on projects.',
    speakers: ['Mike Johnson - Full Stack Developer'],
    topics: ['React', 'Node.js', 'Database Design'],
    registrationDeadline: 'March 18, 2024',
    capacity: '50 attendees',
    price: '$99'
  },
  {
    id: 3,
    title: 'AI & Machine Learning Hackathon',
    type: 'Hackathon',
    date: 'April 5-6, 2024',
    time: '24 Hours',
    location: 'Innovation Hub',
    description: 'Build innovative AI solutions in 24 hours. Great prizes, mentorship, and networking opportunities await!',
    speakers: ['Dr. Lisa Chen - AI Research Lead'],
    topics: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
    registrationDeadline: 'April 1, 2024',
    capacity: '100 teams',
    price: '$50 per team'
  },
  {
    id: 4,
    title: 'Interview Preparation Masterclass',
    type: 'Webinar',
    date: 'March 25, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Online',
    description: 'Learn effective interview techniques, resume building tips, and strategies to crack technical interviews.',
    speakers: ['Sarah Williams - HR Manager at Amazon'],
    topics: ['Interview Skills', 'Resume Writing', 'Career Advice'],
    registrationDeadline: 'March 24, 2024',
    capacity: '200 attendees',
    price: 'Free'
  }
];

const Events = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Events & Workshops
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Enhance your skills and network with industry professionals through our events.
          </Typography>
        </Box>

        {/* Events Grid */}
        <Grid container spacing={4}>
          {events.map((event) => (
            <Grid item xs={12} key={event.id}>
              <Card
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: 600, mr: 2 }}>
                          {event.title}
                        </Typography>
                        <Chip
                          label={event.type}
                          color="primary"
                          size="small"
                        />
                      </Box>

                      <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CalendarIcon
                            sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                          />
                          {event.date}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <AccessTimeIcon
                            sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                          />
                          {event.time}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <LocationIcon
                            sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                          />
                          {event.location}
                        </Box>
                      </Stack>

                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {event.description}
                      </Typography>

                      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                        Speakers:
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {event.speakers.map((speaker, index) => (
                          <Chip
                            key={index}
                            label={speaker}
                            variant="outlined"
                            size="small"
                          />
                        ))}
                      </Stack>

                      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                        Topics Covered:
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {event.topics.map((topic, index) => (
                          <Chip
                            key={index}
                            label={topic}
                            size="small"
                            sx={{ mb: 1 }}
                          />
                        ))}
                      </Stack>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Card variant="outlined" sx={{ p: 2, height: '100%' }}>
                        <Stack spacing={2}>
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              Registration Deadline
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {event.registrationDeadline}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              Capacity
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {event.capacity}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              Price
                            </Typography>
                            <Typography
                              variant="h6"
                              color="primary"
                              sx={{ fontWeight: 600 }}
                            >
                              {event.price}
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                          >
                            Register Now
                          </Button>
                          <Stack
                            direction="row"
                            spacing={1}
                            justifyContent="center"
                          >
                            <Tooltip title="Share Event">
                              <IconButton size="small">
                                <ShareIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Save Event">
                              <IconButton size="small">
                                <BookmarkIcon />
                              </IconButton>
                            </Tooltip>
                          </Stack>
                        </Stack>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Events;