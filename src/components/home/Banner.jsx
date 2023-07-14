import { Box, Button, Container, Typography } from "@mui/material";

export default function Banner() {
  return (
    <>
      <Container sx={{ border: 0, margin: 0, padding: 0 }}>
        <Box
          position="relative"
          display="inline-block"
          sx={{ display: "flex", margin: "0 auto" }}
        >
          <Box position="relative" sx={{ flexGrow: 1, flexBasis: 0 }}>

          </Box>
          <Box
            position="absolute"
            top="5%"
            left="27%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            p={2}
            bgcolor="rgba(0, 0, 0, 0.7)"
          >
            <Typography
              variant="h3"
              component="h1"
              align="center"
              sx={{ color: "white", mb: 2 }}
            >
              One on One
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              align="center"
              sx={{ color: "white", mb: 2 }}
            >
              Conecta, Aprende, Comparte: Tu plataforma segura para clases face
              to face
            </Typography>
            <Button variant="contained" color="primary">
              Ver Clases
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
