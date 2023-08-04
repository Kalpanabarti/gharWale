// Header.js

import React from 'react';
import { Flex, Heading, Button, HStack, chakra, ButtonGroup, useBreakpointValue } from '@chakra-ui/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavMobile from './NavMobile';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../../actions/authAction';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(setIsLoggedIn(false));
    navigate('/'); // Redirect to home page
  };

  return (
    <chakra.header borderBottom="1px solid rgb(0, 0, 0, 0.3)">
      <Flex w="100%" py="5" align="center" justify="space-between" px="6" maxW="container.xl" mx="auto">
        <Link to="/">
          <Heading fontSize="3xl" color="black.700">
            GharWale
          </Heading>
        </Link>
        {isDesktop ? (
          <>
            <Flex align="center" justify="center" flex="1">
              <HStack spacing="4">
                <Link to="/">
                  <Button size="sm" variant="ghost" colorScheme="blue">
                    Home
                  </Button>
                </Link>
                <Link to="/aboutUs">
                  <Button size="sm" variant="ghost" colorScheme="blue">
                    About Us
                  </Button>
                </Link>
                <Link to="/contactUs">
                  <Button size="sm" variant="ghost" colorScheme="blue">
                    Contact Us
                  </Button>
                </Link>
              </HStack>
            </Flex>
            <HStack spacing="4">
              {isLoggedIn ? (
                <>
                  <Link to="/seller">
                    <Button size="sm" variant="solid" colorScheme="blue">
                      Seller
                    </Button>
                  </Link>
                  <Link to="/priceprediction">
                    <Button size="sm" variant="solid" colorScheme="blue">
                      Price Prediction
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline" colorScheme="blue" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  {location.pathname !== '/login' && (
                    <Link to="/login">
                      <Button size="sm" variant="outline" colorScheme="blue">
                        Login
                      </Button>
                    </Link>
                  )}
                  {location.pathname !== '/signup' && (
                    <Link to="/signup">
                      <Button size="sm" variant="outline" colorScheme="blue">
                        Sign Up
                      </Button>
                    </Link>
                  )}
                </>
              )}
            </HStack>
          </>
        ) : (
          <NavMobile />
        )}
      </Flex>
    </chakra.header>
  );
};

export default Header;
