import { Button, Typography } from "@mui/material";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const DownloadButton = ({ sx = {}, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 10,
        padding: '10px 20px', // Adjust padding for a larger button
        background: ' #ff595e', // Gradient background
        color: '#fff',
        textTransform: 'none', // Disable uppercase transformation
        display: 'flex',
        alignItems: 'center',
        gap: 1, // Space between text and icon
        transition: 'transform 0.2s ease-in-out', // Smooth scaling effect on hover
        '&:hover': {
          transform: 'scale(1.05)', // Slightly enlarge the button on hover
          background: ' #ff595e', // Change gradient direction on hover
        },
        ...sx,
      }}
      {...props}
    >
      <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>
        Téléchargez l'App
      </Typography>
      <ArrowOutwardIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
    </Button>
  );
};

export default DownloadButton;
