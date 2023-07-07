import { useState } from "react";
import { Box } from "@mui/system"
import { Container, Button, Drawer, AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawer";
import CartDrawer from "../menuCart/CartDrawer";

const publicNavLinks = [
  {
    title: "Galeria",
    path: "/gallery"
  },
  {
    title: "Iniciar Sesion",
    path: "/login"
  }, {
    title: "Registrarse",
    path: "/register"
  }
]

const privateNavLinks = [
  {
    title: "Galeria",
    path: "/gallery"
  },
  {
    title: "Perfil",
    path: "/profile"
  },
  {
    title: "Cerrar Sesion",
    path: "/logout"
  }
]
const activeStyle = {
  color: '#E8D5C4'
};

// TODO validacion de usuario existente y conectado
const user = true

const navLinks = user ? privateNavLinks : publicNavLinks

const activeLink = ({ isActive }) => (isActive ? activeStyle : { color: '#EEEEEE' });

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>

      <AppBar position="fixed" sx={{ bgcolor: 'primary' }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
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
              sx={{ flexGrow: 0.5, textDecoration: 'none', color: 'inherit' }}
              variant="h5"
              component={NavLink}
              to={"/"}
            >Logo</Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {
                navLinks.map(item => (
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
            <CartDrawer />
          </Toolbar>
        </Container>
      </AppBar >

      <Button variant="contained" onClick={() => { setOpen(true) }}>Open</Button>
      <Drawer
        open={open}
        anchor="top"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", sm: "none" }, height: 10 }}
      >
        <NavListDrawer NavLinks={navLinks} />
      </Drawer>
    </>
  )
}