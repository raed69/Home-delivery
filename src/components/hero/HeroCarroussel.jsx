import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { section1Content } from '../../utils/content';

const SlideContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    height: '70vh',
  },
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))', // Smooth gradient overlay
    zIndex: 2,
  },
}));

// Styling for the image with filter effects
const SlideImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Ensure the image covers the entire container
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  filter: 'brightness(0.6)', // Darken the image slightly for better text readability
});

// Styling for the content overlay
const SlideContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 3, // Make sure the content appears above the overlay
  color: '#ffffff', // Text color for contrast
  padding: theme.spacing(4),
  maxWidth: '80%', // Limit width to avoid text overflow
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HeroCarroussel = () => {
  return (
    <Slider {...settings}>
      {section1Content.map((slide, index) => (
        <SlideContainer key={index}>
          {/* Background Image */}
          <SlideImage src={slide.image} />
    
        </SlideContainer>
      ))}
    </Slider>
  );
};

export default HeroCarroussel;
