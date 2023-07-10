import { Avatar, Box, Button, ButtonGroup, Paper, Stack, Typography } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

export default function PublicationListItem() {
  return (
    <Box component={Paper} elevation={6} padding='1rem'>
      <Stack
        alignItems="center"
        justifyContent="space-around"
        gap="0.5rem"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
        <Avatar variant="square" sx={{ width: '150px', height: '150px', bgcolor: 'pink' }} />
        <Stack alignContent='flex-start'>
          <Typography>Title</Typography>
          <Typography>Categorie</Typography>
        </Stack>
        <Stack>
          <Typography variant="h4" align="center">Precio</Typography>
          <Stack direction='row' >
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button color='primary'><PreviewIcon color="light" /></Button>
              <Button color='warning'><EditIcon color="light" /></Button>
              <Button color='danger'><ClearIcon color="light" /></Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
