/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
// import axios from "axios"

export const FavoritesContext = React.createContext()

const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([])

  const getFavorites = async () => {
    try {
      const res = await fetch("/Favorites.json");
      const data = await res.json();
      setFavorites(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => { getFavorites() }, [])

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )

}

export default FavoritesProvider