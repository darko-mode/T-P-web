import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  LinearProgress
} from '@mui/material';
import {
  Person as PersonIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Description as DescriptionIcon,
  NotificationsActive as NotificationsActiveIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';

const studentProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  course: 'B.Tech Computer Science',
  year: '4th Year',
  skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
  completedCourses: [
    {
      name: 'Web Development Bootcamp',
      progress: 100,
      certificate: '#CERT123'
    },
    {
      name: 'Data Structures & Algorithms',
      progress: 85,
      certificate: null
    }
  ],
  applications: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Software Engineer',
      status: 'Interview Scheduled',
      date: '2024-03-15'
    },
    {
      company: 'Data Analytics Pro',
      position: 'Junior Developer',
      status: 'Application Submitted',
      date: '2024-03-10'
    }
  ],
  notifications: [
    {
      id: 1,
      message: 'Interview scheduled with Tech Solutions Inc.',
      time: '2 hours ago'
    },
    {
      id: 2,
      message: 'New job posting matching your profile',
      time: '1 day ago'
    },
    {
      id: 3,
      message: 'Resume workshop tomorrow at 2 PM',
      time: '2 days ago'
    }
  ]
};

const Dashboard = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Profile Section */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Stack spacing={3} alignItems="center">
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      bgcolor: 'primary.main',
                      fontSize: '3rem'
                    }}
                  >
                    {studentProfile.name.charAt(0)}
                  </Avatar>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                      {studentProfile.name}
                    </Typography>
                    <Typography color="text.secondary">
                      {studentProfile.email}
                    </Typography>
                    <Typography color="text.secondary">
                      {studentProfile.course} - {studentProfile.year}
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    justifyContent="center"
                  >
                    {studentProfile.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  </Stack>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<PersonIcon />}
                  >
                    Edit Profile
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography>
                <Stack spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<DescriptionIcon />}
                    fullWidth
                  >
                    Upload Resume
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<WorkIcon />}
                    fullWidth
                  >
                    Browse Jobs
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<SchoolIcon />}
                    fullWidth
                  >
                    View Courses
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Main Content Section */}
          <Grid item xs={12} md={8}>
            {/* Training Progress */}
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Training Progress
                </Typography>
                <Stack spacing={3}>
                  {studentProfile.completedCourses.map((course, index) => (
                    <Box key={index}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ mb: 1 }}
                      >
                        <Typography variant="subtitle1">
                          {course.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {course.progress}%
                        </Typography>
                      </Stack>
                      <LinearProgress
                        variant="determinate"
                        value={course.progress}
                        sx={{ mb: 1 }}
                      />
                      {course.certificate && (
                        <Button
                          size="small"
                          startIcon={<DescriptionIcon />}
                        >
                          View Certificate
                        </Button>
                      )}
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>

            {/* Job Applications */}
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Job Applications
                </Typography>
                <List>
                  {studentProfile.applications.map((application, index) => (
                    <React.Fragment key={index}>
                      <ListItem>
                        <ListItemIcon>
                          <WorkIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="subtitle1">
                              {application.position} at {application.company}
                            </Typography>
                          }
                          secondary={
                            <Stack
                              direction="row"
                              spacing={2}
                              alignItems="center"
                            >
                              <Chip
                                label={application.status}
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                              <Typography variant="caption" color="text.secondary">
                                Applied on {application.date}
                              </Typography>
                            </Stack>
                          }
                        />
                      </ListItem>
                      {index < studentProfile.applications.length - 1 && (
                        <Divider variant="inset" component="li" />
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Notifications
                </Typography>
                <List>
                  {studentProfile.notifications.map((notification, index) => (
                    <React.Fragment key={notification.id}>
                      <ListItem>
                        <ListItemIcon>
                          <NotificationsActiveIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={notification.message}
                          secondary={notification.time}
                        />
                      </ListItem>
                      {index < studentProfile.notifications.length - 1 && (
                        <Divider variant="inset" component="li" />
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;