import { 
  Box, 
  FormControl, 
  FormLabel, 
  FormHelperText, 
  Input, 
  Textarea, 
  Button, 
  Checkbox 
} from '@chakra-ui/react'

import Bot from "../chatbot/Bot2.jsx"

export default function Fambot() {
  const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];
  return (
      <Box display="flex" justifyContent="center">
        <Bot/>
      </Box>
           
  )
}

