import {
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartItemDrawer from "./CartItemDrawer";
import { KeyboardArrowRight } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { SaleUseContext } from "../../context/SaleContext";

export default function MenuCart() {
  const [openMenuCart, setopenMenuCart] = useState(false);
  const { total } = SaleUseContext();

  const data = JSON.parse(localStorage.getItem("product"));
  let totalAmount = 0;

  if (data) {
    for (const product of data.products) {
      if (product.amount && typeof product.amount === "number") {
        totalAmount += product.amount;
      }
    }
  }

  const handleOpenDrawerCart = () => {
    setopenMenuCart(true);
  };

  const handleCloseDrawerCart = () => {
    setopenMenuCart(false);
  };
  return (
    <div>
      <IconButton color="inherit" aria-label="" onClick={handleOpenDrawerCart}>
        <Badge badgeContent={totalAmount} color="warning">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer
        open={openMenuCart}
        anchor="right"
        onClose={handleCloseDrawerCart}
        sx={{
          width: "auto",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: "auto",
            boxSizing: "border-box",
            pt: "1rem",
          },
        }}
      >
        <Toolbar />
        <Container>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Carro de Compra
          </Typography>
          {data.products.map((product) => (
            <Box key={product.id}>
              <CartItemDrawer product={product} />
            </Box>
          ))}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Total
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              $ {total.toLocaleString("es-CL")}
            </Typography>
          </Box>
          <Button
            variant="contained"
            endIcon={<KeyboardArrowRight />}
            color="success"
            component={NavLink}
            to="/cart"
            onClick={handleCloseDrawerCart}
            sx={{ width: "100%", mt: 3 }}
          >
            Pagar
          </Button>
        </Container>
      </Drawer>
    </div>
  );
}
