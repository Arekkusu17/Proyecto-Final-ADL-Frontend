import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import PublicationListItem from "../components/publications/publicationListItem";

export default function MyPosts() {
  return (
    <Container maxWidth="md" padding='1.5rem'>
      <Stack gap='1.5rem' mt='1rem'>
        <Typography variant="h3" fontWeight='bold'>Mis Publicaciones</Typography>
        <PublicationListItem />
        <PublicationListItem />
        <PublicationListItem />
      </Stack>
    </Container>
  )
}