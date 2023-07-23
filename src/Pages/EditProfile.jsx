import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

export default function EditProfile() {
  // TODO LA INFO DEL USER DEBE VENIR DE UN PROVIDER, EL MISMO QUE ES UTIL PARA LA VIEW PERFIL

  const { user, setUser } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState(user);

  const updateUserDetails = async (e) => {
    e.preventDefault();
    const payload = {
      name: userDetails.name,
      lastName: userDetails.lastname,
      email: userDetails.email,
      password: userDetails.password,
      img_avatar: userDetails.img_avatar
    }
    const requestBody = JSON.stringify(payload)

    try {
      const res = await fetch(import.meta.env.VITE_URL + `users/${userDetails.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: requestBody
      });
      const { result } = await res.json();

      setUser(result)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container
        maxWidth="md"
        component="form"
        padding="1.5rem"
        onSubmit={updateUserDetails}
      >
        <Stack gap="1.5rem" mt="1rem">
          <Typography variant="h3" fontWeight="bold">
            ACTUALIZAR INFORMACIÓN
          </Typography>

          <TextField
            value={userDetails?.name || ""}
            label="Nombre"
            type="text"
            placeholder="Nombre..."
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
          />
          <TextField
            value={userDetails?.lastname || ""}
            label="Apellidos"
            type="text"
            placeholder="Apellidos..."
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastname: e.target.value })
            }
          />
          <TextField
            value={userDetails?.img_avatar || ""}
            label="URL Image"
            type="text"
            placeholder="URL Imagen de Perfil..."
            onChange={(e) =>
              setUserDetails({ ...userDetails, img_avatar: e.target.value })
            }
          />
          <TextField
            value={userDetails?.email || ""}
            label="Email"
            type="email"
            placeholder="Email..."
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <TextField
            value={userDetails?.password || ""}
            label="Password"
            type="password"
            placeholder="Password..."
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: "100%" }}
          >
            Actualizar
          </Button>
        </Stack>
      </Container>
    </>
  );
}
