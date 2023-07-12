import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { saveToken, login } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (res.ok === false) {
      console.log("error de credenciales")
    } else {
      const data = await res.json();
      await saveToken(data.access_token);
      login();
      navigate("/dashboard");
    }
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
              type="text"
              value={email || ''}
              placeholder="Email ..."
              onChange={(e) => { setEmail(e.target.value) }}
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              value={password || ''}
              onChange={(e) => { setPassword(e.target.value) }}
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
