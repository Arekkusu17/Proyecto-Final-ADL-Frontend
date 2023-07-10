import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function EditProfile() {

  // TODO LA INFO DEL USER DEBE VENIR DE UN PROVIDER, EL MISMO QUE ES UTIL PARA LA VIEW PERFIL

  const user = { name: 'Peter Parker', lastname: 'Parker', user: 'peterparker@gmail.com' }

  const [userDetails, setUserDetails] = useState(user)




  const updateUserDetails = async (e) => {
    e.preventDefault();


    try {
      // Funciones para actualizar 
      console.log('Actualizado!', userDetails)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Container maxWidth="md" component='form' padding='1.5rem' onSubmit={updateUserDetails}>
        <Stack gap='1.5rem' mt='1rem'>
          <Typography variant="h3" fontWeight='bold'>ACTUALIZAR INFORMACIÓN</Typography>

          <TextField
            value={userDetails?.name || ''}
            label="Nombre"
            type="text"
            placeholder="Nombre..."
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
          />
          <TextField
            value={userDetails?.lastname || ''}
            label="Apellidos"
            type="text"
            placeholder="Apellidos..."
            onChange={(e) => setUserDetails({ ...userDetails, lastname: e.target.value })}
          />
          <TextField
            value={userDetails?.user || ''}
            label="Email"
            type="email"
            placeholder="Email..."
            onChange={(e) => setUserDetails({ ...userDetails, user: e.target.value })}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ width: '100%' }}>Actualizar </Button>

        </Stack>
      </Container>
    </>
  )
}