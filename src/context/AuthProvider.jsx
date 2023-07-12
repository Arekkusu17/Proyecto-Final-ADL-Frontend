/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

const initialStateToken = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(initialStateToken);
  const [loading, setLoading] = useState(false);

  const getProfileUser = async (access_token) => {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const data = await res.json();
      console.log(data)
      // if (data.statusCode) throw new Error("Login invalido")
      setUser(data);
      console.log("user:", user, data)
    } catch (error) {
      console.log(error)
      setUser(false);
    }
  };

  const saveToken = async (access_token) => {
    try {
      setLoading(true);
      setToken(access_token);
      await getProfileUser(access_token);
      localStorage.setItem("token", access_token);
      // await login()
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


  return (
    <AuthContext.Provider
      value={{ saveToken, user, setUser, token, getProfileUser, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;