/* eslint-disable react/prop-types */
import { Box } from "@mui/system";
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon } from "@mui/material"
import { NavLink } from "react-router-dom"


export default function NavListDrawer({ publicNavLinks, privateNavLinks, setOpen }) {
  return (
    <Box >
      <nav>
        <List>
          {
            publicNavLinks.map(item => (
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

          {/* <ListItem>
            <ListItemButton component="a" href="#ds">
              <ListItemIcon>
                <ShoppingCartIcon></ShoppingCartIcon>
              </ListItemIcon>
            </ListItemButton>
          </ListItem> */}
        </List>
      </nav>
    </Box>
  )
}