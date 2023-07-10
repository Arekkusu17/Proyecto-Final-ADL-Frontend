import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardInfo from "../components/CardInfo";

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
    return <Typography variant="h5"> Loading... </Typography>;
  }

  return (
    <>
      <Container sx={{ my: 4 }}>
        <CardInfo clases={clases} />
      </Container>
    </>
  );
}
