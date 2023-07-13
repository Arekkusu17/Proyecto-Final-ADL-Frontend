import {
  Alert,
  Box,
  Button,
  CardMedia,
  Paper,
  Snackbar,
  Typography,
  styled,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { SaleUseContext } from "../context/SaleContext";
import { useState } from "react";

export default function CardInfo({ clases }) {
  const { id, img, name, price, id_usu, desc, asignatura, nivel, horario } =
    clases;
  const { agregarClase } = SaleUseContext();
  const [open, setOpen] = useState(false);

  const Img = styled("img")({
    width: "50%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  const handleAnadir = (e) => {
    e.preventDefault();
    const newProduct = {
      id: clases.id,
      name: clases.name,
      price: clases.price,
      amount: 1,
      img: clases.img,
    };
    agregarClase(newProduct);
  };

  return (
    <>
      <Paper elevation={15}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            margin: "0 auto",
            alignItems: "center",
            gap: 2,
            overflow: "hidden",
            my: 5,
          }}
        >
          <CardMedia
            component='img'
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
              {asignatura}
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
            <Button
              variant="contained"
              color="success"
              sx={{ mb: 2 }}
              onClick={handleAnadir}
            >
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

      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
      </Snackbar>
    </>
  );
}
