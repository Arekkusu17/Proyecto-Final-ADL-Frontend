import { Box, Container, Stack, Typography } from "@mui/material";
import FavoriteListItem from "../components/favorites/favoriteListItem";
import { FavoritesContext } from "../context/FavoritesProvider";

import { PacmanLoader } from "react-spinners";
import { useContext, useEffect } from "react";


export default function Favorites() {


  const { favorites, getFavorites, loadingFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    getFavorites();
  }, []);


  const listFavorites = favorites.map((favoriteItem) => {
    return (
      <FavoriteListItem key={favoriteItem.id} favoriteItem={favoriteItem} />
    )
  });

  return (

    <Container maxWidth="md" padding='1.5rem'>
      <Stack gap='1.5rem' mt='1rem'>
        <Typography variant="h3" fontWeight='bold'>Mis Favoritos</Typography>
        {/* The loader will be implemented later on the project */}
        {/* {loadingFavorites ? (<Box sx={{ display: 'flex', width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center', }}><PacmanLoader
          color='#3A98B9'
          size={47}
        /> </Box>) : listFavorites} */}
        {listFavorites}

        {/* {listFavorites} */}
      </Stack>
    </Container>
  )
}