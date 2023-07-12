import { Container, Stack, Typography } from "@mui/material";
import FavoriteListItem from "../components/favorites/favoriteListItem";
import { FavoritesContext } from "../context/FavoritesProvider";
import React from "react";


export default function Favorites() {

  const { favorites } = React.useContext(FavoritesContext)

  const listFavorites = favorites.map((favorite) => (
    <FavoriteListItem key={favorite.id} favoriteItem={favorite} />
  ))




  return (

    <Container maxWidth="md" padding='1.5rem'>
      <Stack gap='1.5rem' mt='1rem'>
        <Typography variant="h3" fontWeight='bold'>Mis Favoritos</Typography>
        {listFavorites}
        <FavoriteListItem />
        <FavoriteListItem />
        <FavoriteListItem />
      </Stack>
    </Container>
  )
}