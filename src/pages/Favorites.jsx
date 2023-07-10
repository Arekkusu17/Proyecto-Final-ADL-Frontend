import { Container, Stack, Typography } from "@mui/material";
import FavoriteListItem from "../components/favorites/favoriteListItem";

export default function Favorites() {
  return (
    <Container maxWidth="md" padding='1.5rem'>
      <Stack gap='1.5rem' mt='1rem'>
        <Typography variant="h3" fontWeight='bold'>Mis Favoritos</Typography>
        <FavoriteListItem />
        <FavoriteListItem />
        <FavoriteListItem />
      </Stack>
    </Container>
  )
}