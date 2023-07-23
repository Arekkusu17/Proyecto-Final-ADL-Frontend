import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Rating,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { SaleUseContext } from "../context/SaleContext";
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../context/FavoritesProvider";
import { AuthContext } from "../context/AuthProvider";
import CommentsSection from "./comments/CommentsSection";

export default function CardInfo({ clases }) {
  const {
    id,
    img,
    name,
    price,
    id_usu,
    description,
    subject,
    level,
    schedule,
  } = clases;
  const { agregarClase } = SaleUseContext();
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext)
  const { token } = useContext(AuthContext)
  const [open, setOpen] = useState(false);
  const [isFavorited, setIsFavorited] = useState(null)

  const handleAddToCart = (e) => {
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

  const handleAddToFavorites = (id) => {
    const isAlreadyInFavorites = favorites.some((item) => item.id_classes === id);
    if (isAlreadyInFavorites) {
      return; // Abort the function if the item is already in favorites
    }
    addToFavorites(id);
    setIsFavorited(true)
  }

  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(id)
    setIsFavorited(false)
  }

  useEffect(() => {
    setIsFavorited(favorites.some((item) => item.id_classes === id))
  }, [])

  return (
    <>
      <Paper elevation={15}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: "100%", md: "50%" }, height: "500px" }}
            src={img}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography fontWeight="bold" component="div" variant="h4">
                {name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {subject}
              </Typography>
              <Typography>
                {" "}
                Nivel: <strong>{level}</strong>{" "}
              </Typography>

              <Typography fontWeight="bold"> Horarios: {schedule} </Typography>

              <Typography fontWeight="bold" sx={{ mt: 3 }}>
                Descripcion:{" "}
              </Typography>
              <Typography
                textAlign="justify"
                sx={{ mr: 3, mb: 3, gridColumn: "1 / span 2" }}
              >
                {description}
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="secondary"
                sx={{ mb: 2, gridColumn: "1 / span 2" }}
              >
                Precio: ${price.toLocaleString("es-CL")}.
              </Typography>
              <Box display="flex" justifyContent="space-between" gap="1rem">
                <Button
                  fullWidth
                  variant="contained"
                  color="success"
                  onClick={handleAddToCart}
                >
                  <AddShoppingCartIcon fontWeight="bold" />
                  Carro
                </Button>

                {isFavorited ?
                  <Button fullWidth variant="outlined" color="primary" onClick={() => handleRemoveFromFavorites(id)}>
                    <FavoriteIcon fontWeight="bold" />
                    Eliminar Favorito
                  </Button> : <Button fullWidth variant="contained" color="primary" onClick={() => handleAddToFavorites(id)}>
                    <FavoriteBorderIcon fontWeight="bold" />
                    Favoritos
                  </Button>
                }
              </Box>
            </CardContent>
          </Box>
        </Card>
        <CommentsSection classId={id} />
      </Paper>
    </>
  );
}
