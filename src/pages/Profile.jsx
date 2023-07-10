import { Stack, Avatar, Typography, Paper, Box } from "@mui/material";

// TODO OBTENER LA INFORMACION DEL USUARIO PARA MOSTRAR LA DATA REAL, PASARLA COMO PROPS

export default function Profile() {
  return (


    <Box component={Paper} maxWidth="md" variant="outlined" padding='1.5rem'>
      <Stack
        direction='row'
        alignItems="center"
        justifyContent="space-around"
        gap="4rem"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Stack gap="1.5rem" sx={{ order: { xs: '1', md: '0' } }}>
          <Typography variant='h4' fontWeight="bold" >Nombre Completo</Typography>
          <Typography variant='h4'>Email</Typography>
        </Stack>
        <Avatar alt="Peter" src="https://images.unsplash.com/photo-1688933887296-2452acf991dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" sx={{ width: '200px', height: '200px' }}></Avatar>
      </Stack>
    </Box>
  )
}