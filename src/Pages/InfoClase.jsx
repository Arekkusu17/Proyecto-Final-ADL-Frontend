import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function InfoClase() {
  const id = useParams();
  const [clases, setClases] = useState(null);
  const [loading, setLoading] = useState(true);

  const getClase = async () => {
    try {
      const res = await fetch("/Clases.json");
      const data = await res.json();

      const buscar = data.find((p) => p.id === id.id);

      setClases(buscar);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClase();
  }, []);

  if (loading) {
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box textAlign="center">
          <PacmanLoader color="#3A98B9" size={30} />
        </Box>
      </Box>
    );
  }

  return (
    <>
      <Container sx={{ my: 4 }}>
        <CardInfo clases={clases} />
      </Container>
    </>
  );
}
