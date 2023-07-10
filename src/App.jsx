import { Container } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
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
      <Container>
        <Routes>
          <Route path="/"></Route>
          <Route path="/gallery"></Route>
          <Route path="/login"></Route>
          <Route path="/register"></Route>
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
    </>
  )
}