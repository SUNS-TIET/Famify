import { Box, Button, Image, SimpleGrid, useToast } from "@chakra-ui/react"
import { LockIcon } from "@chakra-ui/icons"

export default function Profile() {
  const toast = useToast();
  return (
    <SimpleGrid columns={2} spacing={10} minChildWidth={360}>
      <Box display="flex" justifyContent="center" m="auto">
        <Button
          bg="#df6005"
          color="white"
          onClick={() => toast({
            title: 'Logged in.',
            description: "Successfully logged in",
            duration: 10000,
            isClosable: true,
            position: 'top',
            status: 'success',
            icon: <LockIcon/>
          })}>Login</Button>
      </Box>
      <Box maxH="360px">
        <Image
              transform="scale(1.0)"
              src="/img/fampayCard.png"
              alt="some text"
              objectFit="contain"
              width="80%"
              transition="0.3s ease-in-out"
            />
      </Box>
    </SimpleGrid>
  )
}
