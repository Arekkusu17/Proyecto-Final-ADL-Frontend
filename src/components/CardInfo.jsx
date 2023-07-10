import { Box, Button, Paper, Typography, styled } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function CardInfo({ clases }) {
  const { id, img, name, price, id_usu, desc, materia, nivel, horario } =
    clases;
  console.log(clases);
  const Img = styled("img")({
    width: "50%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <>
      <Paper elevation={15}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 2,
            overflow: "hidden",
            my: 5,
          }}
        >
          <Img
            src={img}
            alt="toronto"
            sx={{
              maxWidth: "600px",
              maxHeight: "600px",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: "grid",
              gap: 1,
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <Typography variant="h6" sx={{ my: 1, gridColumn: "1 / span 2" }}>
              {materia}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ mb: 2, gridColumn: "1 / span 2" }}
            >
              {name}
            </Typography>
            <Typography fontWeight="bold"> Nivel: </Typography>
            <Typography textAlign="right" sx={{ mr: 3 }}>
              {nivel}
            </Typography>
            <Typography fontWeight="bold"> Horarios: </Typography>
            <Typography textAlign="right" sx={{ mr: 3 }}>
              {horario}
            </Typography>
            <Typography fontWeight="bold" sx={{ mt: 3 }}>
              {" "}
              Descripcion:{" "}
            </Typography>
            <Typography
              textAlign="justify"
              sx={{ mr: 3, mb: 3, gridColumn: "1 / span 2" }}
            >
              {desc}
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="secondary"
              sx={{ mb: 2, gridColumn: "1 / span 2" }}
            >
              $ {price.toLocaleString("es-CL")}
            </Typography>
            <Button variant="contained" color="success" sx={{ mb: 2 }}>
              <AddShoppingCartIcon fontWeight="bold" sx={{ mr: 3 }} />
              Carro
            </Button>
            <Button variant="contained" color="success" sx={{ mb: 2, mr: 2 }}>
              <FavoriteBorderIcon fontWeight="bold" sx={{ mr: 3 }} />
              Favoritos
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
