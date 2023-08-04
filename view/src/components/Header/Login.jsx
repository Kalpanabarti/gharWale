import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { VStack, Box, Image, Text, Input, Button } from '@chakra-ui/react';
import House from '../../assets/images/houseBanner.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../../actions/authAction';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:5100/users');
      const users = response.data;
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        setEmail('');
        setPassword('');

        dispatch(setIsLoggedIn(true));
        navigate('/');
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    dispatch(setIsLoggedIn(false));
    navigate('/');
  };

  const redirectToSignup = () => {
    navigate('/signup')
  };

  return (
    <VStack spacing={4} alignItems="center">
      <Image src={House} width="100%" height="300px" borderRadius="md" />

      <Box textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" color="blue.700">
          Login
        </Text>
        <Text fontSize="lg" color="gray.600">
          Enter your credentials below to login.
        </Text>
      </Box>

      <Box w="md">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              placeholder="Enter your Email*"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
            />
            <Input
              placeholder="Enter your Password*"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
            />

            <Button type="submit" w="full" colorScheme="blue" size="lg">
              Login
            </Button>

            {isLoggedIn ? (
              <>
                <Button as={Link} to="/seller" variant="outline" colorScheme="blue" size="md" mt={4}>
                  Seller
                </Button>
                <Button
                  as={Link}
                  to="/priceprediction"
                  variant="outline"
                  colorScheme="blue"
                  size="md"
                  mt={2}
                >
                  Price Prediction
                </Button>
                <Button variant="outline" onClick={handleLogout} size="md" mt={4}>
                  Logout
                </Button>
              </>
            ) : null}
            {!isLoggedIn && (
            <Text fontSize='sm'>Don't have an Account? <Button variant='link' colorScheme='blue' onClick={redirectToSignup}>SignUp</Button></Text>

            )}
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default LoginForm;
