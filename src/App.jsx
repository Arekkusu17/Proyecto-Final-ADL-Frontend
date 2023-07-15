import { Box, Container, Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import FavoritesProvider from "./context/FavoritesProvider"
import SaleContextProvider from "./context/SaleContext";
import MyClassesProvider from "./context/MyClassesProvider";

import Navbar from "./components/navbar/Navbar";
import { Private } from "./components/routesProtection/private";

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
import MyClasses from "./Pages/MyClasses";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

import PacmanLoader from "react-spinners/PacmanLoader"





export default function App() {

  const { user, loading } = useContext(AuthContext)
  // const user = false

  return (
    <>

      <SaleContextProvider>
        <MyClassesProvider>
          {(!user && loading) ? (<Stack justifyContent="center"
            height='60vh'
            alignItems="center"
            gap="3rem"
            sx={{ margin: '5rem auto' }}><PacmanLoader color="#3A98B9" size={52} /></Stack>) : (<>
              <Navbar />
              <FavoritesProvider>
                <Container color="primary" sx={{ p: { xs: '0' }, maxWidth: { xs: '100%' } }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/infoClase/:id" element={<InfoClase />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile"></Route>
                    <Route path="/cart"></Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Private> <Dashboard /> </Private>}>
                      <Route path="profile" element={<Profile />} />
                      <Route path="editprofile" element={<EditProfile />} />
                      <Route path="favorites" element={<Favorites />} />
                      <Route path="createpost" element={<CreatePost />} />
                      <Route path="classes" element={<MyClasses />} />
                    </Route>
                  </Routes>
                </Container>
              </FavoritesProvider>
            </>
          )}
        </MyClassesProvider>
      </SaleContextProvider >
      {/* </AuthProvider> */}
    </>
  );
}
