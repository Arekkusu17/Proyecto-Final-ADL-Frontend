import { useState } from "react";
import { Box } from "@mui/system";
import {
  Container,
  Button,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import NavListDrawer from "./NavListDrawer";
import CartDrawer from "../menuCart/CartDrawer";
import { SaleUseContext } from "../../Context/SaleContext";

const publicNavLinks = [
  {
    title: "Galeria",
    path: "/gallery",
  },
  {
    title: "Iniciar Sesion",
    path: "/login",
  },
  {
    title: "Registrarse",
    path: "/register",
  },
];

const privateNavLinks = [
  {
    title: "Galeria",
    path: "/gallery",
  },
  {
    title: "Perfil",

    path: "/dashboard",
  },
  {
    title: "Cerrar Sesion",
    path: "/logout",
  },
];
const activeStyle = {
  color: "#E8D5C4",
};

// TODO validacion de usuario existente y conectado
const user = true;

const navLinks = !user ? privateNavLinks : publicNavLinks;

const activeLink = ({ isActive }) =>
  isActive ? activeStyle : { color: "#EEEEEE" };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { total } = SaleUseContext();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ bgcolor: "primary", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{ flexGrow: 0.5, textDecoration: "none", color: "inherit" }}
              variant="h5"
              component={NavLink}
              to={"/"}
            >
              Logo
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navLinks.map((item) => (
                <Button
                  color="inherit"
                  key={item.title}
                  component={NavLink}
                  to={item.path}
                  style={activeLink}
                  sx={{ mx: "0.5rem" }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            {total != 0 ? <CartDrawer /> : <ShoppingCartIcon />}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        open={open}
        anchor="top"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", sm: "none" }, height: 10 }}
      >
        <NavListDrawer NavLinks={navLinks} />
      </Drawer>
    </>
  );
}
