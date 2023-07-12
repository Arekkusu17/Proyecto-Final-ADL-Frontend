import { Box, Button, Stack, Typography } from "@mui/material";
import { SaleUseContext } from "../../context/SaleContext";
import { useEffect } from "react";

export default function CartItemDrawer({ product }) {
  const { total, agregarClase, eliminarClase } = SaleUseContext();

  console.log(product);

  const handleMas = (id) => {
    const newProduct = {
      id: id,
      amount: 1,
    };
    agregarClase(newProduct);
  };

  const handleMenos = (id) => {
    const newProduct = {
      id: id,
      amount: -1,
    };
    agregarClase(newProduct);
  };

  const handleEliminar = (id) => {
    eliminarClase(id);
  };

  useEffect(() => { }, [total]);

  return (
    <>
      <Box
        sx={{
          border: "2px dashed gray",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Box
          maxWidth="100%"
          sx={{
            maxWidth: "150px",
            maxHeight: "140px",
            width: "100%",
            height: "auto",
            m: 2,
          }}
        >
          <img
            src={product.img}
            alt="imagen de la clase"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            width: "300px",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" sx={{ mt: 0 }}>
              {product.name}
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              {product.amount <= 1 ? (
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    minWidth: "unset",
                    mr: 3,
                  }}
                  onClick={() => handleEliminar(product.id)}
                >
                  <Typography sx={{ fontSize: "15px" }}>X</Typography>
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="warning"
                  sx={{
                    minWidth: "unset",
                    mr: 3,
                  }}
                  onClick={() => handleMenos(product.id)}
                >
                  <Typography sx={{ fontSize: "15px", color: "white" }}>
                    --
                  </Typography>
                </Button>
              )}
              <Box
                sx={{
                  minWidth: "unset",
                  mt: 1,
                }}
              >
                {product.amount}
              </Box>
              <Button
                variant="contained"
                color="info"
                sx={{
                  minWidth: "unset",
                  ml: 3,
                }}
                onClick={() => handleMas(product.id)}
              >
                <Typography sx={{ fontSize: "15px" }}>+</Typography>
              </Button>
            </Box>
          </Stack>
          <Typography sx={{ mt: 5, mr: 2, whiteSpace: "nowrap" }}>
            $ {(product.price * product.amount).toLocaleString("es-CL")}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
