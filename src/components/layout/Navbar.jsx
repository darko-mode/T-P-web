import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { Avatar } from '@mui/material';

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Training', path: '/training' },
  { text: 'Placement', path: '/placement' },
  { text: 'Dashboard', path: '/dashboard' },
  { text: 'Events', path: '/events' },
  { text: 'Testimonials', path: '/testimonials' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [user] = useAuthState(auth);
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        T&P Portal
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} component={RouterLink} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) return null;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 700
            }}
          >
            T&P Portal
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
            <Avatar
              src={user?.photoURL}
              alt={user?.displayName}
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="body1" sx={{ display: { xs: 'none', sm: 'block' } }}>
              {user?.displayName}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
          }}
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
};

export default Navbar;