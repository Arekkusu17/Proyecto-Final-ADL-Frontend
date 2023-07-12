import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

import FavoritesProvider from "./context/FavoritesProvider"
import { AuthContext } from "./context/AuthProvider";

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

import { useContext } from "react";



export default function App() {
  const { loading, user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <FavoritesProvider>

        <Container color="primary" sx={{ p: 5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/infoClase/:id" element={<InfoClase />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile"></Route>
            <Route path="/cart"></Route>
            <Route path="/dashboard" element={user && !loading ? <Dashboard /> : <Navigate to="/" />}>
              <Route path="profile" element={<Profile />} />
              <Route path="editprofile" element={<EditProfile />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="createpost" element={<CreatePost />} />
              <Route path="posts" element={<MyPosts />} />
            </Route>
          </Routes>
        </Container>
      </FavoritesProvider>
      {/* <Footer /> */}
    </>
  );
}
