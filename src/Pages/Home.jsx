import { Box, CardMedia, Typography } from "@mui/material";
import Banner from "../components/home/Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <br />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
          <CardMedia
            component="img"
            image="/img/home.jpg"
            height="100%"
            width="100%"
            alt="alt de imagen"
          />
        </Box>
        <Box sx={{ flexGrow: 1, flexBasis: 0, pl: 5, textAlign: "justify" }}>
          <Typography variant="tbody1">
            Bienvenido/a a nuestra plataforma en línea, el lugar donde la
            educación se encuentra con la comunidad. En nuestra página web,
            puedes conectarte con profesionales apasionados y aprender de manera
            personalizada, ya sea que quieras enseñar o aprender. Nuestro
            objetivo es brindar un entorno seguro y confiable donde puedas
            acceder a clases uno a uno con expertos en una amplia gama de
            disciplinas. <br />
            <br />
            La belleza de nuestra plataforma radica en su flexibilidad y
            versatilidad. Si tienes conocimientos y habilidades que deseas
            compartir, puedes registrarte como profesor y ofrecer tus servicios
            a otros estudiantes ávidos de aprender. Por otro lado, si buscas
            adquirir nuevas habilidades o ampliar tus conocimientos, puedes
            registrarte como alumno y elegir entre una variedad de profesores
            disponibles en diferentes áreas.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
