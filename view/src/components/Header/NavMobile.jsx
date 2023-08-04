import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ButtonGroup,
  VStack,
  Input,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
  IconButton,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../../actions/authAction';

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(setIsLoggedIn(false));
    onClose();
    navigate('/');
  };

  return (
    <>
      <IconButton
        variant="ghost"
        icon={<FiMenu fontSize="1.35rem" />}
        aria-label="Open Menu"
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Center>
            <DrawerHeader>Menu</DrawerHeader>
          </Center>
          <DrawerBody px="14" mt="4">
            <VStack as="nav" spacing="8" alignItems="left">
              <Link to="/">
                <Button size="sm" variant="link" colorScheme="blue">
                  Home
                </Button>
              </Link>
              <Link to="/aboutUs">
                <Button size="sm" variant="link" colorScheme="blue">
                  About Us
                </Button>
              </Link>
              <Link to="/contactUs">
                <Button size="sm" variant="link" colorScheme="blue">
                  Contact Us
                </Button>
              </Link>
              {isLoggedIn ? (
                <>
                  <Link to="/seller">
                    <Button size="sm" variant="solid" colorScheme="blue">
                      Seller
                    </Button>
                  </Link>
                  <Link to="/priceprediction">
                    <Button size="sm" variant="solid" colorScheme="blue">
                      Price Predictor
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMobile;
