import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function CreatePost() {

  const [newPostDetails, setNewPostDetails] = useState({
    name: '',
    desc: '',
    materia: '',
    price: '',
    nivel: '',
    horario: '',
    img: ''
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("aqui")
      // Funciones para actualizar 
      console.log('Creado!', newPostDetails)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container maxWidth="md" component='form' padding='1.5rem' onSubmit={handleSubmit}>
      <Stack gap='1.5rem' mt='1rem'>
        <Typography variant="h3" fontWeight='bold'>CREAR PUBLICACIÓN</Typography>
        <Stack gap='1rem' direction='row'>
          <TextField
            value={newPostDetails?.name || ''}
            fullWidth
            label="Nombre"
            type="text"
            placeholder="Nombre de la publicación..."
            onChange={(e) => { setNewPostDetails({ ...newPostDetails, name: e.target.value }) }}
          />
          <TextField
            fullWidth
            value={newPostDetails?.materia || ''}
            label="Asignatura"
            type="text"
            placeholder="Asignatura..."
            onChange={(e) => { setNewPostDetails({ ...newPostDetails, materia: e.target.value }) }}
          />
        </Stack>
        <Stack gap='1rem' direction='row'>
          <TextField
            fullWidth
            value={newPostDetails?.price || ''}
            label="Precio"
            type="number"
            placeholder="Precio..."
            onChange={(e) => { setNewPostDetails({ ...newPostDetails, price: e.target.value }) }}
          />
          <TextField
            fullWidth
            value={newPostDetails?.nivel || ''}
            label="Nivel"
            type="text"
            placeholder="Nivel..."
            onChange={(e) => { setNewPostDetails({ ...newPostDetails, nivel: e.target.value }) }}
          />
        </Stack>
        <TextField
          value={newPostDetails?.desc || ''}
          multiline
          maxRows={5}
          label="Descripcion"
          type="text"
          placeholder="Descripcion de la publicación..."
          onChange={(e) => { setNewPostDetails({ ...newPostDetails, desc: e.target.value }) }}
        />
        <TextField
          value={newPostDetails?.horario || ''}
          label="Horario"
          type="text"
          placeholder="Días de clase..."
          onChange={(e) => { setNewPostDetails({ ...newPostDetails, horario: e.target.value }) }}
        />
        <TextField
          value={newPostDetails?.img || ''}
          label="Link Imagen"
          type="text"
          placeholder="Enlace a la imagen de la publicación..."
          onChange={(e) => { setNewPostDetails({ ...newPostDetails, img: e.target.value }) }}
        />
        <Button variant="contained" color="primary" type="submit" sx={{ width: '100%' }}>Crear Publicación</Button>

      </Stack>
    </Container>
  )
}