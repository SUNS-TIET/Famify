import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { CalendarIcon, TimeIcon, ChatIcon, BellIcon} from '@chakra-ui/icons'
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={TimeIcon} color="white" />
          Home
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="dailyBytes">
          <ListIcon as={CalendarIcon} color="white" />
          Daily Bytes
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="fambot">
          <ListIcon as={ChatIcon} color="white" />
          Fambot
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="notifications">
          <ListIcon as={BellIcon} color="white" />
          Notification
        </NavLink>
      </ListItem>

    </List>
  )
}