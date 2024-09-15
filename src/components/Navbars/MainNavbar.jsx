import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import { NAVBAR_HEIGHT } from "../../constants";
import useScrollPosition from "../../hooks/useScrollPosition";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadButton from "../Buttons/DownloadButton";

// Styled LinkButton using NavLink for active state detection
const LinkButton = ({ children, to, ...props }) => (
  <Stack
    component={NavLink}
    to={to}
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: 'text.secondary', // Default color
      position: "relative",
      textDecoration: "none", // Remove default underline from NavLink
      fontWeight: 700, // Stronger font weight for a bold appearance
      padding: '8px 16px', // Add padding for a more spacious design
      borderRadius: '8px', // Rounded corners for the background
      fontFamily: 'Poppins, sans-serif', // Custom font family (optional)
      "&:hover": { color: "#ff595e" },
      "&.active": {
        color: "#ff595e", // Active text color
        backgroundColor: "rgba(255, 89, 98, 0.2)", // Transparent active background color
        fontWeight: 800, // Extra bold font weight when active
      },
    }}
    {...props}
  >
    {children}
  </Stack>
);


const MainNavbar = () => {
  const scrollPosition = useScrollPosition();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: NAVBAR_HEIGHT,
        bgcolor: scrollPosition > 10 ? "rgba(7,7,16,.7)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(60px)",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Links */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <LinkButton to="/" exact>
                <Typography variant="body2">Accueil</Typography>
              </LinkButton>

              <LinkButton to="/about">
                <Typography variant="body2">A Propos</Typography>
              </LinkButton>

              <LinkButton to="/contact">
                <Typography variant="body2">Contact</Typography>
              </LinkButton>

              <LinkButton to="/blog">
                <Typography variant="body2">Blog</Typography>
              </LinkButton>
            </Stack>
          )}

          {/* Action Buttons */}
          {isMobile ? (
            <IconButton>
              <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={5} alignItems="center">
              <LinkButton to="/language" spacing={1}>
                <LanguageIcon fontSize="small" />
                <Typography variant="body2">FR</Typography>
              </LinkButton>

              <DownloadButton sx={{ borderRadius: 3 }} />
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default MainNavbar;
