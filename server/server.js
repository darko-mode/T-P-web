require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  }
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

// Job Application Schema
const jobApplicationSchema = new mongoose.Schema({
  jobId: String,
  name: String,
  email: String,
  phone: String,
  resume: {
    data: Buffer,
    contentType: String
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'accepted', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

// Routes
app.post('/api/job-applications', upload.single('resume'), async (req, res) => {
  try {
    const { jobId, name, email, phone } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ error: 'Resume file is required' });
    }

    const application = new JobApplication({
      jobId,
      name,
      email,
      phone,
      resume: {
        data: req.file.buffer,
        contentType: req.file.mimetype
      }
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Failed to submit application', details: error.message });
  }
});

app.get('/api/job-applications/:jobId', async (req, res) => {
  try {
    const applications = await JobApplication.find({ jobId: req.params.jobId });
    res.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

app.patch('/api/job-applications/:applicationId', async (req, res) => {
  try {
    const { status } = req.body;
    const application = await JobApplication.findByIdAndUpdate(
      req.params.applicationId,
      { status },
      { new: true }
    );
    res.json(application);
  } catch (error) {
    console.error('Error updating application status:', error);
    res.status(500).json({ error: 'Failed to update application status' });
  }
});

// Route to get resume file
app.get('/api/resumes/:applicationId', async (req, res) => {
  try {
    const application = await JobApplication.findById(req.params.applicationId);
    if (!application || !application.resume) {
      return res.status(404).json({ error: 'Resume not found' });
    }

    res.setHeader('Content-Type', application.resume.contentType);
    res.send(application.resume.data);
  } catch (error) {
    console.error('Error fetching resume:', error);
    res.status(500).json({ error: 'Failed to fetch resume' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        error: 'File size too large. Maximum size is 5MB.'
      });
    }
  }

  res.status(500).json({ 
    error: 'Something went wrong!', 
    details: err.message 
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});