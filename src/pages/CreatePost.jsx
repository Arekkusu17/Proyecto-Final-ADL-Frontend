import { Button, Container, Stack, TextField, Typography } from "@mui/material";

export default function CreatePost() {
  return (
    <Container maxWidth="md" component='form' padding='1.5rem' onSubmit={() => { }}>
      <Stack gap='1.5rem' mt='1rem'>
        <Typography variant="h3" fontWeight='bold'>CREAR PUBLICACIÓN</Typography>
        <TextField
          value={''}
          label="Titulo"
          type="text"
          placeholder="Titulo de la publicación..."
          onChange={() => { }}
        />
        <TextField
          value={''}
          label="Campo"
          type="text"
          placeholder="Campo..."
          onChange={() => { }}
        />
        <TextField
          value={''}
          label="Campo"
          type="text"
          placeholder="Campo..."
          onChange={() => { }}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ width: '100%' }}>Crear Publicación</Button>

      </Stack>
    </Container>
  )
}