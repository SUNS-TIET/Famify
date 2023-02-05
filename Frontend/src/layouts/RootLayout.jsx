import { Divider, Grid, GridItem, Spacer } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

// components
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1}} 
        bg="#df6005"
        minHeight={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
      >
        <Sidebar />
      </GridItem>

      {/* main content & navbar */}
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5}} 
        p="40px"
        gap="10px"
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}