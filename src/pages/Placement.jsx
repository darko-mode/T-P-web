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
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Business as BusinessIcon,
  WorkOutline as WorkOutlineIcon,
  FilterList as FilterListIcon
} from '@mui/icons-material';

const jobListings = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$80,000 - $120,000',
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    description: 'We are looking for a skilled Software Engineer to join our dynamic team...',
    postedDate: '2 days ago'
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'Analytics Pro',
    location: 'San Francisco, CA',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$90,000 - $140,000',
    skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    description: 'Join our data science team to work on cutting-edge AI projects...',
    postedDate: '1 week ago'
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    company: 'Creative Design Co.',
    location: 'Remote',
    type: 'Contract',
    experience: '2-3 years',
    salary: '$70,000 - $100,000',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
    description: 'Looking for a creative UX/UI Designer to help shape our product...',
    postedDate: '3 days ago'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'Cloud Systems Ltd.',
    location: 'Chicago, IL',
    type: 'Full-time',
    experience: '4-6 years',
    salary: '$100,000 - $150,000',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS'],
    description: 'Join our DevOps team to build and maintain cloud infrastructure...',
    postedDate: '5 days ago'
  }
];

const Placement = () => {
  const [jobType, setJobType] = React.useState('');
  const [experience, setExperience] = React.useState('');

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Placement Portal
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Discover exciting career opportunities and connect with top companies.
          </Typography>
        </Box>

        {/* Search and Filter Section */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search jobs by title, company, or keywords"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Job Type</InputLabel>
                <Select
                  value={jobType}
                  label="Job Type"
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <MenuItem value="">All Types</MenuItem>
                  <MenuItem value="full-time">Full-time</MenuItem>
                  <MenuItem value="part-time">Part-time</MenuItem>
                  <MenuItem value="contract">Contract</MenuItem>
                  <MenuItem value="internship">Internship</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Experience</InputLabel>
                <Select
                  value={experience}
                  label="Experience"
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <MenuItem value="">All Levels</MenuItem>
                  <MenuItem value="entry">Entry Level</MenuItem>
                  <MenuItem value="mid">Mid Level</MenuItem>
                  <MenuItem value="senior">Senior Level</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<FilterListIcon />}
                sx={{ height: '100%' }}
              >
                More Filters
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Job Listings */}
        <Grid container spacing={3}>
          {jobListings.map((job) => (
            <Grid item xs={12} key={job.id}>
              <Card
                sx={{
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                        {job.title}
                      </Typography>
                      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <BusinessIcon
                            sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                          />
                          {job.company}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <LocationIcon
                            sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                          />
                          {job.location}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <WorkOutlineIcon
                            sx={{ fontSize: 20, mr: 1, color: 'primary.main' }}
                          />
                          {job.experience}
                        </Box>
                      </Stack>
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {job.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {job.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{ mb: 1 }}
                          />
                        ))}
                      </Stack>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={4}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          color="primary"
                          sx={{ fontWeight: 600, mb: 1 }}
                        >
                          {job.salary}
                        </Typography>
                        <Chip
                          label={job.type}
                          color="primary"
                          variant="outlined"
                          sx={{ mb: 1 }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 2 }}
                        >
                          Posted {job.postedDate}
                        </Typography>
                      </Box>
                      <Stack spacing={1}>
                        <Button variant="contained" color="primary" fullWidth>
                          Apply Now
                        </Button>
                        <Button variant="outlined" color="primary" fullWidth>
                          Save Job
                        </Button>
                      </Stack>
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

export default Placement;