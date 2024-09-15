import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff595e', // Button background color
  color: '#fff', // Text color
  fontSize: '1rem', // Adjust font size
  fontWeight: 'bold',
  padding: '10px 20px', // Adjust padding for size
  borderRadius: '30px', // Rounded corners
  textTransform: 'none', // Prevent uppercase text transformation
  transition: 'transform 0.2s ease-in-out', // Smooth scaling effect on hover
  '&:hover': {
    transform: 'scale(1.05)', // Slightly enlarge the button on hover
    background: ' #ff595e', // Change gradient direction on hover
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem', // Responsive font size for small screens
    padding: '8px 16px', // Adjust padding for small screens
  },
}));

const JoinButton = () => {
  return (
    <StyledButton variant="contained">
      Rejoignez Nous en Tant que Cuisinier
    </StyledButton>
  );
};

export default JoinButton;
