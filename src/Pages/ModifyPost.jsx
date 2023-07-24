import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function ModifyPost() {
  const token = localStorage.getItem("token");
  const [newPostDetails, setNewPostDetails] = useState({
    name: "",
    description: "",
    subject: "",
    price: "",
    level: "",
    schedule: "",
    img: "",
  });

  const [clases, setClases] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const getClases = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_URL + "classes/" + id, {
        method: "GET",
      });
      const data = await res.json();
      setClases(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClases();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subject = newPostDetails.subject || clases.subject; // Usa clases.subject si newPostDetails.subject es vacío
    const name = newPostDetails.name || clases.name;
    const price = newPostDetails.price || clases.price;
    const level = newPostDetails.level || clases.level;
    const description = newPostDetails.description || clases.description;
    const schedule = newPostDetails.schedule || clases.schedule;
    const img = newPostDetails.img || clases.img;

    try {
      const res = await fetch(import.meta.env.VITE_URL + "classes/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          subject,
          name,
          price,
          level,
          description,
          schedule,
          img,
        }),
      });
      const data = await res.json();

      if (data.ok) {
        Swal.fire({
          icon: "success",
          title: "Has Modificado la Clase.",
          confirmButtonText: "Aceptar",
          didClose: () => {
            navigate("/dashboard/classes");
          },
        });
      } else {
        throw data.error;
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al Eliminar la Clase.",
        text: error,
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <Container
      maxWidth="md"
      component="form"
      padding="1.5rem"
      onSubmit={handleSubmit}
    >
      <Stack gap="1.5rem" mt="1rem">
        <Typography variant="h3" fontWeight="bold">
          MODIFICAR PUBLICACIÓN
        </Typography>
        <Stack gap="1rem" direction="row">
          <TextField
            fullWidth
            value={newPostDetails?.subject || ""}
            label={clases.subject}
            type="text"
            onChange={(e) => {
              setNewPostDetails({ ...newPostDetails, subject: e.target.value });
            }}
          />
          <TextField
            value={newPostDetails?.name || ""}
            fullWidth
            label={clases.name}
            type="text"
            placeholder="Nombre de la publicación..."
            onChange={(e) => {
              setNewPostDetails({ ...newPostDetails, name: e.target.value });
            }}
          />
        </Stack>
        <Stack gap="1rem" direction="row">
          <TextField
            fullWidth
            value={newPostDetails?.price || ""}
            label={clases.price}
            type="number"
            placeholder="Precio..."
            onChange={(e) => {
              setNewPostDetails({ ...newPostDetails, price: e.target.value });
            }}
          />
          <TextField
            fullWidth
            value={newPostDetails?.level || ""}
            label={clases.level}
            type="text"
            placeholder="Nivel..."
            onChange={(e) => {
              setNewPostDetails({ ...newPostDetails, level: e.target.value });
            }}
          />
        </Stack>
        <TextField
          value={newPostDetails?.description || ""}
          multiline
          maxRows={5}
          label={clases.description}
          type="text"
          placeholder="Descripcion de la publicación..."
          onChange={(e) => {
            setNewPostDetails({
              ...newPostDetails,
              description: e.target.value,
            });
          }}
        />
        <TextField
          value={newPostDetails?.schedule || ""}
          label={clases.schedule}
          type="text"
          placeholder="Días de clase..."
          onChange={(e) => {
            setNewPostDetails({ ...newPostDetails, schedule: e.target.value });
          }}
        />
        <TextField
          value={newPostDetails?.img || ""}
          label={clases.img}
          type="text"
          placeholder="Enlace a la imagen de la publicación..."
          onChange={(e) => {
            setNewPostDetails({ ...newPostDetails, img: e.target.value });
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ width: "100%" }}
        >
          Modificar Publicación
        </Button>
      </Stack>
    </Container>
  );
}
