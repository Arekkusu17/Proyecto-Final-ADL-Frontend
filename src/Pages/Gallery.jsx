import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function Gallery() {
  const [clases, setClases] = useState([]);

  const getClases = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_URL + "classes", {
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

  return (
    <>
      <Container>
        <Grid container spacing={2} mt={3}>
          {clases.map((clase) => (
            <Grid item key={clase.id} xs={12} sm={6} md={4}>
              <Cards clase={clase} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
