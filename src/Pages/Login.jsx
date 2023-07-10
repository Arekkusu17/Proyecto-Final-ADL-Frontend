import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Paper elevation={15} sx={{ width: "70%", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1, display: "grid", gap: 4, p: 3 }}>
            <Typography variant="h4" textAlign="center" sx={{ my: 2 }}>
              Acceder
            </Typography>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmail}
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
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
}
