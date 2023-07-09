import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Container color="primary" sx={{ p: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
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
