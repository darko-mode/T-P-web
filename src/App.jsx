import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Placement from './pages/Placement';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Testimonials from './pages/Testimonials';
import JobApplication from './pages/JobApplication';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './pages/Login';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const App = () => {
  const [user] = useAuthState(auth);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 3,
            width: '100%',
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/apply" element={<JobApplication />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/training" element={<Training />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/job-application/:jobId" element={<JobApplication />} />
            <Route path="/events" element={<Events />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;