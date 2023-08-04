import { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

import {
  VStack,
  Box,
  Image,
  Text,
  Input,
  HStack,
  Button
} from '@chakra-ui/react';
import House from '../../assets/images/houseBanner.jpg';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const navigateToLogin = () => {
    navigate('/login')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if the email is already registered
      const response = await axios.get('http://localhost:5100/users');
      const users = response.data;
      const existingUser = users.find((user) => user.email === email);

      if (existingUser) {
        alert('This email is already registered. Please use a different email.');
        return;
      }

      // Make POST request to API
      await axios.post('http://localhost:5100/users', { name, email, password });

      // Reset form
      setName('');
      setEmail('');
      setPassword('');

      // Navigate to the login page
      navigateToLogin();

      // Display success message to user
      alert('User created successfully');
    } catch (err) {
      // Display error message to user
      alert(err.response.data.error);
    }
  };

  return (
    <VStack border='1px' borderColor='blue.100' boxShadow='md' px='5' py='6' mt='10' mb='10'>
      <Image src={House} width='100%' height='300px' />
      <Box>
        <Text mb='4px' fontWeight='extrabold' fontSize='30px' textAlign='center'>
          Sign Up
        </Text>
        <Text fontSize='sm'>Fill in the form below to create an account.</Text>
      </Box>

      <VStack my='3px' spacing='2px'>
        <Box maxWidth='500px'>
          <form onSubmit={handleSubmit}>
            <Input mt='3' mb='2' placeholder="Enter your Name*" type="name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Enter your Email*" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input my='2' placeholder="Enter your Password*" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <HStack my='2'>
              <Button type="submit" w='full' px='4' colorScheme="blue">Sign Up</Button>
              <Button type="button" w={{ base: 'full', md: '50%' }} variant='outline' onClick={navigateToLogin}>Cancel</Button>
            </HStack>
          </form>
        </Box>
      </VStack>

      <Text fontSize='sm'>Already have an account? <Button variant='link' colorScheme='blue' onClick={navigateToLogin}>Login</Button></Text>
    </VStack>
  );
};

export default SignupForm;
