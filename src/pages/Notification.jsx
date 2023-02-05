import { Box, Button, useToast } from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"

export default function Notification() {
  const toast = useToast();
  return (
    <Box display="flex" justifyContent="center" m="auto">
        <Button
          bg="#df6005"
          color="white"
          onClick={() => toast({
            title: 'Today's Bit',
            description: "SIP is a way of putting a small amount of money into a special savings plan (like a mutual fund) every month instead of one big lump sum. This helps you save up over time and also helps you not worry so much about the ups and downs of the market.",
            duration: 10000,
            isClosable: true,
            position: 'top',
            status: 'info',
            variant:"subtle",
            icon: <InfoIcon/>
          })}>Get Bits</Button>
      </Box>
  )
}
