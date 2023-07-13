import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Password:", password);
  };

  return (
    <>
      <Container sx={{ p: '2rem' }}>
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
              />
              <TextField
                label="Nombre"
                type="text"
                value={nombre}
                onChange={handleNombre}
                fullWidth
              />
              <TextField
                label="Apellidos"
                type="text"
                value={apellido}
                onChange={handleApellido}
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={handlePassword}
                fullWidth
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
