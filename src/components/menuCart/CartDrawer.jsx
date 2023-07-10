import { Button, Container, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartItemDrawer from "./CartItemDrawer";
import { KeyboardArrowRight } from "@mui/icons-material";
import { NavLink } from "react-router-dom";


export default function MenuCart() {
  const [openMenuCart, setopenMenuCart] = useState(false);

  const handleOpenDrawerCart = () => {
    setopenMenuCart(true)
  }

  const handleCloseDrawerCart = () => {
    setopenMenuCart(false)
  }

  return (
    <div>
      <IconButton
        color='inherit'
        aria-label=""
        onClick={handleOpenDrawerCart}
      >
        <ShoppingCartIcon
        />
      </IconButton>
      <Drawer
        open={openMenuCart}
        anchor="right"
        onClose={handleCloseDrawerCart}
        sx={{
          width: 'auto',
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 'auto', boxSizing: 'border-box', pt: '1rem' },
        }}
      >
        <Toolbar />
        <Container >
          <Typography variant="h5">Carro [{"cantidad"}]</Typography>
          <CartItemDrawer />
          <CartItemDrawer />
          <CartItemDrawer />
          <CartItemDrawer />
          <Button variant="contained" endIcon={<KeyboardArrowRight />} color="success" component={NavLink} to="/cart" onClick={handleCloseDrawerCart} sx={{ width: '100%' }}>Pagar</Button>
        </Container>
      </Drawer>
    </div>
  );
}