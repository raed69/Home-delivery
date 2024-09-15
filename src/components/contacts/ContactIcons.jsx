import React from 'react';
import { Box, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const floatAnimation = {
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-8px)', // Adjust the floating distance
    },
  },
};

const ContactIcons = () => {
  return (
    <Box
      sx={{
        position: 'fixed', // Fix the icons to the right side of the screen
        right: 20, // Distance from the right side
        top: '40%', // Center vertically
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2, // Spacing between icons
        zIndex: 1000, // Make sure icons are on top of other elements
      }}
    >
      <IconButton
        sx={{
          ...floatAnimation,
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          '&:hover': { backgroundColor: '#ff595e' },
          animation: 'float 3s ease-in-out infinite',
          animationDelay: '0s',
        }}
      >
        <WhatsAppIcon fontSize="medium" />
      </IconButton>
      <IconButton
        sx={{
          ...floatAnimation,
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          '&:hover': { backgroundColor: '#ff595e' },
          animation: 'float 3s ease-in-out infinite',
          animationDelay: '0.5s', // Add a delay for a staggered effect
        }}
      >
        <FacebookIcon fontSize="medium" />
      </IconButton>
      <IconButton
        sx={{
          ...floatAnimation,
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          '&:hover': { backgroundColor: '#ff595e' },
          animation: 'float 3s ease-in-out infinite',
          animationDelay: '1s', // Add a delay for a staggered effect
        }}
      >
        <InstagramIcon fontSize="medium" />
      </IconButton>
      <IconButton
        sx={{
          ...floatAnimation,
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          '&:hover': { backgroundColor: '#ff595e' },
          animation: 'float 3s ease-in-out infinite',
          animationDelay: '1.5s', // Add a delay for a staggered effect
        }}
      >
        <TwitterIcon fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default ContactIcons;
