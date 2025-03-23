import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Divider
} from '@mui/material';
import {
  School as SchoolIcon,
  Group as GroupIcon,
  Lightbulb as LightbulbIcon,
  EmojiEvents as EmojiEventsIcon
} from '@mui/icons-material';

const objectives = [
  {
    icon: SchoolIcon,
    title: 'Quality Training',
    description: 'Provide industry-relevant training programs to enhance student employability.'
  },
  {
    icon: GroupIcon,
    title: 'Industry Connect',
    description: 'Build strong relationships with companies to create placement opportunities.'
  },
  {
    icon: LightbulbIcon,
    title: 'Skill Development',
    description: 'Focus on holistic development through workshops and practical training.'
  },
  {
    icon: EmojiEventsIcon,
    title: 'Career Growth',
    description: 'Guide students in choosing the right career path and achieving their goals.'
  }
];

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Head of Training & Placement',
    image: '/team/sarah.jpg',
    description: '15+ years of experience in career counseling and corporate relations.'
  },
  {
    name: 'Prof. Michael Chen',
    role: 'Training Coordinator',
    image: '/team/michael.jpg',
    description: 'Expert in technical training and skill development programs.'
  },
  {
    name: 'Ms. Emily Williams',
    role: 'Placement Officer',
    image: '/team/emily.jpg',
    description: 'Specializes in corporate networking and student placements.'
  },
  {
    name: 'Mr. David Brown',
    role: 'Industry Relations Manager',
    image: '/team/david.jpg',
    description: 'Manages partnerships with leading companies and organizations.'
  }
];

const About = () => {
  return (
    <Box sx={{ py: 6 }}>
      {/* Mission Section */}
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          About Our Training & Placement Cell
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: 800, mx: 'auto' }}
        >
          Empowering students with the skills and opportunities they need to succeed in their careers.
        </Typography>

        {/* Objectives Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Our Objectives
          </Typography>
          <Grid container spacing={4}>
            {objectives.map((objective, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3
                  }}
                >
                  <objective.icon
                    sx={{ fontSize: 48, color: 'primary.main', mb: 2 }}
                  />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {objective.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {objective.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 8 }} />

        {/* Team Section */}
        <Box>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack
                      spacing={2}
                      sx={{
                        alignItems: 'center',
                        textAlign: 'center'
                      }}
                    >
                      <Avatar
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: 120,
                          height: 120,
                          mb: 2,
                          bgcolor: 'primary.main'
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                        sx={{ fontWeight: 500 }}
                      >
                        {member.role}
                      </Typography>
                      <Typography color="text.secondary">
                        {member.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;