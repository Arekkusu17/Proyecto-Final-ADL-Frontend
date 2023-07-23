/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const initialStateToken = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(initialStateToken);
  const [loading, setLoading] = useState(false);

  const getProfileUser = async (access_token) => {
    try {
      const res = await fetch(import.meta.env.VITE_URL + `users/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const { result } = await res.json();
      setUser(result);
    } catch (error) {
      console.log(error);
      setUser(false);
    }
  };



  const saveToken = async (access_token) => {
    try {
      setLoading(true);
      setToken(access_token);
      await getProfileUser(access_token);
      localStorage.setItem("token", access_token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(false);
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (token) {
      getProfileUser(token);
    } else {
      setUser(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        saveToken,
        user,
        setUser,
        token,
        getProfileUser,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
