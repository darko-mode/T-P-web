import React, { useState } from 'react';
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Divider,
  Alert,
  CircularProgress
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import {
  WorkOutline as WorkOutlineIcon,
  Business as BusinessIcon,
  LocationOn as LocationIcon,
  AttachFile as AttachFileIcon
} from '@mui/icons-material';

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    skills: '',
    resume: null,
    coverLetter: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [applicationId, setApplicationId] = useState(null);

  // Mock job data - in a real app, this would come from an API
  const jobData = {
    id: jobId,
    title: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    location: 'New York, NY',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$80,000 - $120,000',
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    description: 'We are looking for a skilled Software Engineer to join our dynamic team...'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        education: '',
        skills: '',
        resume: null,
        coverLetter: ''
      });
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewResume = async (applicationId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/resumes/${applicationId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch resume');
      }
      
      // Convert the response to a blob
      const blob = await response.blob();
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error('Error fetching resume:', error);
      setError('Failed to fetch resume');
    }
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
            Job Application
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            {jobData.title} at {jobData.company}
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Application submitted successfully! We'll get back to you soon.
          </Alert>
        )}

        <Grid container spacing={4}>
          {/* Job Details Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Job Details
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <WorkOutlineIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography>{jobData.type}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography>{jobData.location}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BusinessIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography>{jobData.experience}</Typography>
                  </Box>
                  <Divider />
                  <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                    {jobData.salary}
                  </Typography>
                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Required Skills:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {jobData.skills.map((skill) => (
                        <Chip key={skill} label={skill} size="small" />
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Application Form */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth required>
                        <InputLabel>Position Applied For</InputLabel>
                        <Select
                          name="position"
                          value={formData.position}
                          label="Position Applied For"
                          onChange={handleChange}
                          disabled={loading}
                        >
                          <MenuItem value="software_engineer">Software Engineer</MenuItem>
                          <MenuItem value="data_scientist">Data Scientist</MenuItem>
                          <MenuItem value="product_manager">Product Manager</MenuItem>
                          <MenuItem value="business_analyst">Business Analyst</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Years of Experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        multiline
                        rows={2}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        label="Cover Letter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        component="label"
                        fullWidth
                        sx={{ mb: 2 }}
                        disabled={loading}
                      >
                        Upload Resume
                        <input
                          type="file"
                          hidden
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          disabled={loading}
                        />
                      </Button>
                      {formData.resume && (
                        <Typography variant="body2" color="text.secondary">
                          Selected file: {formData.resume.name}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Stack direction="row" spacing={2}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          disabled={loading || !formData.resume}
                        >
                          {loading ? <CircularProgress size={24} /> : 'Submit Application'}
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          size="large"
                          fullWidth
                          onClick={() => navigate('/placement')}
                          disabled={loading}
                        >
                          Cancel
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Add this section to display the PDF */}
        {pdfUrl && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">View Resume</h2>
            <iframe
              src={pdfUrl}
              className="w-full h-[600px] border border-gray-300 rounded-lg"
              title="Resume Preview"
            />
          </div>
        )}
      </Container>
    </Box>
  );
};

export default JobApplication; 