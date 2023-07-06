import { useState } from "react";
import { Box } from "@mui/system"
import { Container, CssBaseline, Button, Drawer, AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import NavListDrawer from "./NavListDrawer";

const publicNavLinks = [
  {
    title: "Galeria",
    path: "gallery"
  },
  {
    title: "Iniciar Sesion",
    path: "login"
  }, {
    title: "Registrarse",
    path: "register"
  }
]

const privateNavLinks = [
  {
    title: "Perfil",
    path: "#profile"
  },
  {
    title: "Cerrar Sesion",
    path: "#logout"
  }
]
const activeStyle = {
  color: '#E8D5C4',
};

const activeLink = ({ isActive }) => (isActive ? activeStyle : { color: '#EEEEEE' });

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <CssBaseline />

      <AppBar position="fixed" sx={{ bgcolor: '#3A98B9' }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", sm: "none" } }}>
              <MenuIcon
              />
            </IconButton>
            <Typography
              sx={{ flexGrow: 0.8, textDecoration: 'none', color: 'inherit' }}
              variant="h5"
              component={NavLink}
              to={"/"}
            >Logo</Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {
                publicNavLinks.map(item => (
                  <Button
                    color="inherit"
                    key={item.title}
                    component={NavLink}
                    to={item.path}
                    style={activeLink}
                    sx={{ mx: '0.5rem' }}
                  >
                    {item.title}
                  </Button>
                ))
              }
            </Box>
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => { setOpen(true) }}>
              <ShoppingCartIcon
              />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar >

      <Button variant="contained" onClick={() => { setOpen(true) }}>Open</Button>
      <Drawer
        open={open}
        anchor="top"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <NavListDrawer publicNavLinks={publicNavLinks} privateNavLinks={privateNavLinks} setOpen={setOpen} />
      </Drawer>
    </>
  )
}