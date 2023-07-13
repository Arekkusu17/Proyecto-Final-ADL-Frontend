/* eslint-disable react/prop-types */
import { Avatar, Box, Button, ButtonGroup, Paper, Stack, Typography } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import ClearIcon from '@mui/icons-material/Clear';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useNavigate } from "react-router-dom";

import { SaleUseContext } from "../../context/SaleContext";
import { useEffect } from "react";




export default function FavoriteListItem({ favoriteItem }) {
  const { total, agregarClase } = SaleUseContext();

  const navigate = useNavigate()

  const handleViewProduct = (id) => {
    navigate(`/infoClase/${id}`)
  }

  const handleAddToCart = (id) => {
    const newProduct = {
      id: id,
      amount: 1,
    };
    agregarClase(newProduct)
  }

  const handleDeleteFavorite = (id) => {
    // TODO
  }

  useEffect(() => { }, [total]);

  return (
    <Box component={Paper} elevation={6} padding='1rem'>
      <Stack
        alignItems="center"
        justifyContent="space-around"
        gap="0.5rem"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Avatar variant="square" sx={{ width: '150px', height: '150px', bgcolor: 'pink' }} src={favoriteItem.img} />
        <Stack alignContent='flex-start'>
          <Typography color='black'>{favoriteItem.name}</Typography>
          <Typography>{favoriteItem.id}</Typography>
        </Stack>
        <Stack>
          <Typography variant="h4" align="center">${favoriteItem.price.toLocaleString("es-CL")}</Typography>
          <Stack direction='row' >
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button color='primary' onClick={() => { handleViewProduct(favoriteItem.id) }}><PreviewIcon color="light" /></Button>
              <Button color='danger'><ClearIcon color="light" /></Button>
              <Button color='success' onClick={() => { handleAddToCart(favoriteItem.id) }}><AddShoppingCartIcon /></Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

