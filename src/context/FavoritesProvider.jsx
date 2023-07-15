/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import axios from "axios"

export const FavoritesContext = React.createContext()

const FavoritesProvider = ({ children }) => {
  const [loadingFavorites, setLoadingFavorites] = useState(false)

  const [favorites, setFavorites] = useState([])

  const getFavorites = async () => {
    try {
      setLoadingFavorites(true)
      const res = await fetch("/Favorites.json");
      const data = await res.json();
      setFavorites(data);
      setLoadingFavorites(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FavoritesContext.Provider value={{ setLoadingFavorites, loadingFavorites, favorites, setFavorites, getFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )

}

export default FavoritesProvider