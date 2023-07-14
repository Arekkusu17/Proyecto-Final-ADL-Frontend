/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import axios from "axios"

export const FavoritesContext = React.createContext()

const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([])

  const getFavorites = async () => {
    try {
      const res = await fetch("/Favorites.json");
      const data = await res.json();
      setFavorites(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites, getFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )

}

export default FavoritesProvider