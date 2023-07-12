import { Container, Stack, Typography } from "@mui/material";
import FavoriteListItem from "../components/favorites/favoriteListItem";
import { FavoritesContext } from "../context/FavoritesProvider";
import { useContext, useEffect } from "react";


export default function Favorites() {

  const { favorites, setFavorites, getFavorites } = useContext(FavoritesContext)

  useEffect(() => { getFavorites() }, [])

  const listFavorites = favorites.map((favoriteItem) => {
    return (
      <FavoriteListItem key={favoriteItem.id} favoriteItem={favoriteItem} />
    )
  })

  return (

    <Container maxWidth="md" padding='1.5rem'>
      <Stack gap='1.5rem' mt='1rem'>
        <Typography variant="h3" fontWeight='bold'>Mis Favoritos</Typography>
        {listFavorites}
      </Stack>
    </Container>
  )
}