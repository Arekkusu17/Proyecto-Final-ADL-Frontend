import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleApellido = (e) => {
    setApellido(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nombre,
      lastName: apellido,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Respuesta:", result);
        Swal.fire({
          icon: "success",
          title: "Usuario Registrado con Exito",
          confirmButtonText: "Aceptar",
          didClose: () => {
            window.location.href = "/login";
          },
        });
      } else {
        console.log("Error en la solicituda:", response.status);
        console.log(response.result);
        if (response.status === 701 || response.status === 702) {
          Swal.fire({
            icon: "error",
            title:
              response.status === 701
                ? "Email ya se encuentra registrado"
                : "Formato de email no válido",
            confirmButtonText: "Aceptar",
            didClose: () => {
              window.location.href = "/register";
            },
          });
        }
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      <Container sx={{ p: "2rem" }}>
        <Paper elevation={15} sx={{ width: "70%", margin: "0 auto" }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ flexGrow: 1, display: "grid", gap: 4, p: 3 }}>
              <Typography variant="h4" textAlign="center" sx={{ my: 2 }}>
                Registro
              </Typography>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={handleEmail}
                fullWidth
                required
              />
              <TextField
                label="Nombre"
                type="text"
                value={nombre}
                onChange={handleNombre}
                fullWidth
                required
              />
              <TextField
                label="Apellidos"
                type="text"
                value={apellido}
                onChange={handleApellido}
                fullWidth
                required
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={handlePassword}
                fullWidth
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Registrar
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
}
