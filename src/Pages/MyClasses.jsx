import { Container, Stack, Typography } from "@mui/material";
import MyClassListItem from "../components/myClasses/myClassListItem";
import { useContext, useEffect } from "react";
import { MyClassesContext } from "../context/MyClassesProvider";


export default function MyClasses() {

  const { myClasses, getMyClasses } = useContext(MyClassesContext)

  useEffect(() => { getMyClasses() }, [])

  const listMyClasses = myClasses.map((myClassItem) => {
    return (
      <MyClassListItem key={myClassItem.id} myClassItem={myClassItem} />
    )
  });

  return (
    <Container maxWidth="lg" padding='1.5rem'>
      <Typography variant="h3" fontWeight='bold'>Mis Publicaciones</Typography>
      <Stack gap='1.5rem' mt='1rem'>
        {listMyClasses}
        {/* <MyClassListItem />
        <MyClassListItem />
        <MyClassListItem /> */}
      </Stack>
    </Container>
  )
}