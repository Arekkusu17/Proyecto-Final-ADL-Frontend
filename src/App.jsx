import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/"></Route>
          <Route path="/gallery"></Route>
          <Route path="/login"></Route>
          <Route path="/register"></Route>
          <Route path="/profile"></Route>
          <Route path="/cart"></Route>
          <Route path="#"></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
