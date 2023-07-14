import { AppBar, Box, Typography, Container } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <>
      <AppBar
        position="static"
        component='footer'
        sx={{
          mt: '2rem',
          bgcolor: "primary",
          height: 'auto',
          pb: '3rem',
          color: "black"
        }}
      >
        <Container sx={{ display: "flex", margin: "0 auto" }}>
          <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
            <Typography variant="h5" sx={{ my: 4 }} fontWeight="bold">
              Logo
            </Typography>
            <Typography variant="tbody1" sx={{ pr: 4 }} textAlign="center">
              Conecta, Aprende, Comparte: Tu plataforma segura para clases face
              to face
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, flexBasis: 0 }} textAlign="center">
            <Typography variant="h5" sx={{ my: 4 }} fontWeight="bold">
              Contactanos
            </Typography>
            <Typography variant="tbody1">info@empresa.cl</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, flexBasis: 0 }} textAlign="right">
            <Typography variant="h5" sx={{ my: 4 }} fontWeight="bold">
              Siguenos
            </Typography>
            <Box sx={{ ml: 1 }}>
              <FacebookIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}
