import React from 'react';
import HeroCarroussel from '../components/hero/HeroCarroussel';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextCommercial from '../components/hero/TextCommercial';
import ContactIcons from '../components/contacts/ContactIcons';

// Modernized Section Container using styled-components with responsive design
const SectionContainer = styled('section')(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  position: 'absolute',
  height: '100vh',
  [theme.breakpoints.down('md')]: {
    height: '80vh', // Adjust height for medium screens
  },
  [theme.breakpoints.down('sm')]: {
    height: '60vh', // Adjust height for small screens
  },
}));
const TextOverlay = styled(Box)({
  position: 'absolute',
  top: '50%', // Adjust the vertical position as needed
  left: '30%',
  transform: 'translateX(-50%)', // Center horizontally
  zIndex: 3, // Ensure it appears above the slider
  textAlign: '',
  color: '#fff',
  padding: '20px',
});

const Section1 = () => (
  <SectionContainer>

    <TextOverlay>
      <TextCommercial />
    </TextOverlay>


    <HeroCarroussel />
    <ContactIcons />

  </SectionContainer>
);

export default Section1;
