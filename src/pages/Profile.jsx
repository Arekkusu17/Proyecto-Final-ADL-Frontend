import { Stack, Avatar, Typography, Paper, Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

// TODO OBTENER LA INFORMACION DEL USUARIO PARA MOSTRAR LA DATA REAL, PASARLA COMO PROPS

export default function Profile() {
  const { user } = useContext(AuthContext)
  return (
    <Box component={Paper} maxWidth="md" variant="outlined" padding='1.5rem'>
      <Stack
        direction='row'
        alignItems="center"
        justifyContent="space-around"
        gap="4rem"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Stack gap="1.5rem" sx={{ order: { xs: '1', md: '0' } }}>
          <Typography variant='h4' fontWeight="bold" >{user.name}</Typography>
          <Typography variant='h4'>{user.email}</Typography>
          <Typography variant='h4'>{user.role}</Typography>

        </Stack>
        <Avatar alt="Peter" src={user.avatar} sx={{ width: '200px', height: '200px' }}></Avatar>
      </Stack>
    </Box>
  )
}