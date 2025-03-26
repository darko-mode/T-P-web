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
    fullName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
    coverLetter: '',
    resume: null
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
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
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Please upload a PDF file');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        resume: file
      }));
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Validate required fields
      const requiredFields = ['fullName', 'email', 'phone', 'education', 'experience', 'skills', 'coverLetter'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        throw new Error(`Please fill in all required fields: ${missingFields.join(', ')}`);
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const formDataToSend = new FormData();
      formDataToSend.append('jobId', jobId);
      formDataToSend.append('name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      
      if (formData.resume) {
        // Validate file type
        if (formData.resume.type !== 'application/pdf') {
          throw new Error('Invalid file type. Only PDF files are allowed.');
        }

        // Validate file size (5MB limit)
        if (formData.resume.size > 5 * 1024 * 1024) {
          throw new Error('File size too large. Maximum size is 5MB.');
        }

        formDataToSend.append('resume', formData.resume);
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch('http://localhost:5000/api/job-applications', {
        method: 'POST',
        body: formDataToSend,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || errorData.error || 'Failed to submit application');
      }

      const data = await response.json();
      setSuccess('Application submitted successfully!');
      setFormData({ fullName: '', email: '', phone: '', education: '', experience: '', skills: '', coverLetter: '', resume: null });
    } catch (err) {
      console.error('Error submitting application:', err);
      if (err.name === 'AbortError') {
        setError('Request timed out. Please try again.');
      } else if (err.message === 'Failed to fetch') {
        setError('Unable to connect to the server. Please check if the server is running and try again.');
      } else {
        setError(err.message || 'Failed to submit application');
      }
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
            {success}
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
                        name="fullName"
                        value={formData.fullName}
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
                        <InputLabel>Education Level</InputLabel>
                        <Select
                          name="education"
                          value={formData.education}
                          label="Education Level"
                          onChange={handleChange}
                          disabled={loading}
                        >
                          <MenuItem value="bachelor">Bachelor's Degree</MenuItem>
                          <MenuItem value="master">Master's Degree</MenuItem>
                          <MenuItem value="phd">Ph.D.</MenuItem>
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
                        label="Skills (comma-separated)"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        helperText="List your skills separated by commas"
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
                      <Box sx={{ mt: 2 }}>
                        <input
                          accept="application/pdf"
                          style={{ display: 'none' }}
                          id="resume-upload"
                          type="file"
                          onChange={handleFileChange}
                          disabled={loading}
                        />
                        <label htmlFor="resume-upload">
                          <Button
                            variant="outlined"
                            component="span"
                            disabled={loading}
                          >
                            Upload Resume (PDF)
                          </Button>
                        </label>
                        {formData.resume && (
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Selected file: {formData.resume.name}
                          </Typography>
                        )}
                      </Box>
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