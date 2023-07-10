
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import InfoClase from "./Pages/InfoClase";
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile"
import Favorites from "./pages/Favorites"
import CreatePost from "./pages/CreatePost"
import MyPosts from "./pages/MyPosts"


export default function App() {
  return (
    <>
      <Navbar />
      <Container color="primary" sx={{ p: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/infoClase/:id" element={<InfoClase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile"></Route>
          <Route path="/cart"></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="editprofile" element={<EditProfile />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="createpost" element={<CreatePost />} />
            <Route path="posts" element={<MyPosts />} />
          </Route>
        </Routes>
      </Container>
      <Footer />
    </>

  );
}

