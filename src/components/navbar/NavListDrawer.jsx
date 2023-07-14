/* eslint-disable react/prop-types */
import { Box } from "@mui/system";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material"
import { NavLink } from "react-router-dom"


export default function NavListDrawer({ NavLinks, setOpen }) {
  return (
    <Box >
      <nav>
        <List>
          {
            NavLinks.map(item => (
              <ListItem key={item.title}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={() => setOpen(false)}>
                  <ListItemText primary={item.title}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </nav>
    </Box>
  )
}