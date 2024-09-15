import { createTheme } from '@mui/material/styles';
import typography from './typography';

const theme = createTheme({
  palette: {
    mode: 'light', // Use 'light' or 'dark' based on your preference
    primary: {
      main: '#ff595e', // A strong primary color for better contrast
    },
    background: {
      default: '#ffffff', // Background color for the app
      paper: '#fefae0',   // Optional: Background for paper elements
    },
    text: {
      primary: '#ffffff', // White text for better contrast on dark overlays
      secondary: 'rgba(255, 255, 255, 0.7)', // Lighter text for secondary information
    },
  },
  typography, // Assuming typography settings are defined correctly
});

export default theme;
