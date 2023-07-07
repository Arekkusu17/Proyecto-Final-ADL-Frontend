import { Box, Stack } from "@mui/material";

export default function CartItemDrawer() {
  return (<>

    <Box sx={{ border: '2px dashed gray', display: 'flex', flexDirection: 'row', gap: '2rem' }}>
      <p>Imagen</p>
      <Stack sx={{ display: 'flex', flexDirection: 'column' }}><p>Texto</p>
        <p>Cantidad </p>
      </Stack>
      <p>Precio</p>
    </Box>
  </>)
}