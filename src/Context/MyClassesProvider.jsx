import React, { useState } from "react";

export const MyClassesContext = React.createContext()

const MyClassesProvider = ({ children }) => {

  const [myClasses, setMyClasses] = useState([])

  const getMyClasses = async () => {
    try {
      const res = await fetch("/myClasses.json");
      const data = await res.json();
      setMyClasses(data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteClassById = () => {
    // TODO
  }

  const editClassById = () => {
    // TODO
  }

  return (
    <MyClassesContext.Provider value={{ myClasses, setMyClasses, getMyClasses }}>
      {children}
    </MyClassesContext.Provider>
  )

}

export default MyClassesProvider