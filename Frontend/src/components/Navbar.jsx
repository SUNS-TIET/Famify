import { UnlockIcon } from "@chakra-ui/icons"
import { 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Spacer, 
  HStack, 
  useToast, 
  AvatarBadge,
  Avatar,
  Image,
  Box
} from "@chakra-ui/react"

export default function Navbar() {
  const toast = useToast()
  const imgUrl = "https://i.pinimg.com/originals/fd/aa/c8/fdaac8009d10b11093844248c80346ea.jpg";

  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Box boxSize="60px" m="1rem">
        <Image src='/img/fampay.png' alt='fampay-logo' borderRadius='full'/>
      </Box>
      <Heading as="h1" fontSize="1.5em">Famify</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Avatar name="sahir" src={imgUrl}>
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>skailord007@gmail.com</Text>
        <Button 
          bg="#df6005"
          color="white"
          onClick={() => toast({
            title: 'Logged out.',
            description: "Successfully logged out",
            duration: 10000,
            isClosable: true,
            position: 'top',
            status: 'success',
            icon: <UnlockIcon />,
          })}
        >Logout</Button>
      </HStack>
    </Flex>
  )
}