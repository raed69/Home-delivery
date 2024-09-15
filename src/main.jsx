import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // You imported createRoot
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/theme/index.js";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Use createRoot directly (not ReactDOM.createRoot)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline/>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
);
