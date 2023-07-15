import { Box, Button, Typography } from "@mui/material";
import HeroImage from "../../assets/img/heroImg.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  const handleClases = () => {};

  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${HeroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "600px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "60%" },
              padding: { xs: 3, sm: 2, md: 20 },
            }}
          >
            <Box
              position="relative"
              textAlign="center"
              p={2}
              bgcolor="rgba(0, 0, 0, 0.7)"
              flexDirection="column"
            >
              <Typography
                variant="h3"
                component="h1"
                align="center"
                sx={{ color: "white", mb: 2 }}
              >
                DotStudent
              </Typography>
              <Typography
                variant="body1"
                color="textPrimary"
                component="p"
                align="center"
                sx={{ color: "white", mb: 2 }}
              >
                Descubre una experiencia educativa única en nuestra plataforma
                segura
              </Typography>
              <Typography
                variant="body2"
                color="textPrimary"
                component="p"
                align="center"
                sx={{ color: "white", mb: 2 }}
              >
                "Conecta, Aprende, Comparte: Tu plataforma segura para clases
                face to face".
              </Typography>

              <Link to={`/Gallery`} style={{ textDecoration: "none" }}>
                <Button variant="contained">Ver Clases</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
