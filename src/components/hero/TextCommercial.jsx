import { Typography, Box } from '@mui/material';
import React from 'react';
import JoinButton from '../Buttons/JoinButton';

const TextCommercial = () => {
  return (
    <Box sx={{  color: '#fff', zIndex: 3, maxWidth: '80%', mx: 'auto' }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          mb: 2, // Margin bottom for spacing
          lineHeight: 1.1,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Text shadow for better contrast
        }}
      >
        Découvrez des <span style={{ color: '#ff595e' }}>Répas</span> Faits Maison, Authentiques et Sains
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontWeight:90,
          mt: 1, // Margin top for spacing
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', // Subtle text shadow
        }}
      >
        Empowering Home Cooks and Offering Diverse Meals
      </Typography>
      <Box sx={{ mt: 3 }}> {/* Adds margin for spacing */}
        <JoinButton />
      </Box>
    </Box>
  );
};

export default TextCommercial;
