import { Avatar, Box, Button, ButtonGroup, Paper, Stack, Typography } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";


export default function MyClassListItem({ myClassItem }) {
  const navigate = useNavigate()

  const handleViewProduct = (id) => {
    navigate(`/infoClase/${id}`)
  }

  return (
    <Box component={Paper} elevation={6} padding='1rem'>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        gap="0.5rem"
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Stack gap="2rem" alignItems="center" sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Avatar src={myClassItem.img} variant="square" sx={{ width: { xs: '260px', sm: '400px', md: '150px' }, height: { xs: '300px', md: '150px' }, bgcolor: 'pink' }} />
          <Stack alignContent='flex-start'>
            <Box>
              <Typography
                variant="overline"
                fontSize="1.2rem"
                sx={{
                  lineHeight: '1.5',
                  textAlign: { xs: 'center', md: 'inherit' },
                }}>{myClassItem.name}</Typography>
              <Typography variant="h4"
                fontWeight="bold"
                fontFamily="Kanit,sans-serif"
                sx={{ textAlign: { xs: 'center', md: 'inherit' } }}
              >{myClassItem.nivel}</Typography>
            </Box>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h4" align="center">${myClassItem.price.toLocaleString("es-CL")}</Typography>
          <Stack direction='row' >
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button color='dark' onClick={() => handleViewProduct(myClassItem.id)}><PreviewIcon color="light" /></Button>
              <Button color='primary'><EditIcon color="light" /></Button>
              <Button color='danger'><ClearIcon color="light" /></Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
