import { Textarea, Image, VStack, HStack, Box, Text, Input, Button } from '@chakra-ui/react'

const Form = ({ searchedHouse }) => {
  const { agent } = searchedHouse;

  return (
    <VStack border='1px' borderColor='blue.100' boxShadow='md' px='5' py='6'>
      <Box mb="3">
        <Text fontWeight='bold' fontSize='15px'>Seller Contact Details:</Text>
      </Box>
      <Box>
        <Text mb='-3px' fontWeight='extrabold' fontSize='15px'>{agent.name}</Text>
        <Text fontSize='12px' color='gray.600'>+{agent.phone}</Text>
      </Box>
    </VStack>
  );
};

export default Form;