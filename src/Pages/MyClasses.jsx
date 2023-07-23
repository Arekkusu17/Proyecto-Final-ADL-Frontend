import {
  Alert,
  AlertTitle,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import MyClassListItem from "../components/myClasses/myClassListItem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyClasses() {
  const token = localStorage.getItem("token");

  const [clases, setClases] = useState([]);

  const navigate = useNavigate();

  const getClases = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_URL + "classes/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log(data.result);
      setClases(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClases();
  }, []);

  const listMyClasses = clases.map((clase) => {
    return <MyClassListItem key={clase.id} myClassItem={clase} />;
  });

  return (
    <Container maxWidth="lg" padding="1.5rem">
      <Typography variant="h3" fontWeight="bold">
        Mis Publicaciones
      </Typography>
      <Stack gap="1.5rem" mt="1rem">
        {clases.length === 0 ? (
          <Container>
            <Alert variant="outlined" severity="info">
              <AlertTitle>No has realizado publicaciones.</AlertTitle>
              <Typography>
                Recuerda que puedes ofrecer tus servicios mediante la creación
                de tu propia publicación.{" "}
                <strong>
                  ¡Te invitamos a revisar la sección Crear Publicación!
                </strong>
              </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/dashboard/createpost");
                }}
              >
                Ir a Sección
              </Button>
            </Alert>
          </Container>
        ) : (
          listMyClasses
        )}
      </Stack>
    </Container>
  );
}
