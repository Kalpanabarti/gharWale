import { Box, Center, Heading, Text, Input, Textarea, Button } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box maxW="800px" mx="auto" my="100px" px="6">
      <Center mb="12">
        <Heading fontSize="4xl" fontWeight="bold" color="blue.600">
          Contact Us
        </Heading>
      </Center>
      <Text fontSize="xl" mb="8" textAlign="center">
        Have a question or want to learn more about our services? Fill out the form below and we'll get back to you as soon as possible.
      </Text>
      <Box as="form" maxW="500px" mx="auto">
        <Input
          placeholder="Name"
          mb="4"
          borderColor="blue.200"
          focusBorderColor="blue.300"
          borderRadius="lg"
          _hover={{ borderColor: "blue.300" }}
        />
        <Input
          placeholder="Email"
          mb="4"
          borderColor="blue.200"
          focusBorderColor="blue.300"
          borderRadius="lg"
          _hover={{ borderColor: "blue.300" }}
        />
        <Textarea
          placeholder="Message"
          mb="4"
          borderColor="blue.200"
          focusBorderColor="blue.300"
          borderRadius="lg"
          _hover={{ borderColor: "blue.300" }}
        />
        <Button
          colorScheme="blue"
          w="full"
          borderRadius="lg"
          _hover={{ bg: "blue.600" }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
