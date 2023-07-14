import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
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
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
          <CardMedia
            component="img"
            sx={{ width: { xs: '100%', md: '50%' }, height: '500px' }}
            src={img}
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography fontWeight="bold" component="div" variant="h4" >
                {name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {asignatura}
              </Typography>
              <Typography > Nivel: <strong>{nivel}</strong> </Typography>

              <Typography fontWeight="bold"> Horarios: {horario} </Typography>

              <Typography fontWeight="bold" sx={{ mt: 3 }}>

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
                Precio: ${price.toLocaleString("es-CL")}.
              </Typography>
              <Box display='flex' justifyContent="space-between" gap='1rem'>
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  onClick={handleAnadir}
                >
                  <AddShoppingCartIcon fontWeight="bold" />
                  Carro
                </Button>
                <Button
                  fullWidth
                  variant="contained" color="primary" >
                  <FavoriteBorderIcon fontWeight="bold" />
                  Favoritos
                </Button>
              </Box>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            </Box>
          </Box>
        </Card>
      </Paper>
    </>
  );
}
