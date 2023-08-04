import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

const AddProperty = () => {
  const [property, setProperty] = useState({
    type: '',
    name: '',
    description: '',
    image: '',
    imageLg: '',
    country: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    surface: '',
    price: '',
    agent: {
      name: '',
      phone: ''
    }
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to API with property object as data
      await axios.post('http://localhost:5100/housesData', property);

      // Reset form
      setProperty({
        type: '',
        name: '',
        description: '',
        image: '',
        imageLg: '',
        country: '',
        address: '',
        bedrooms: '',
        bathrooms: '',
        surface: '',
        price: '',
        agent: {
          name: '',
          phone: ''
        }
      });

      // Navigate to properties page
      navigate('/');

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
          Add Property
        </Text>
        <Text fontSize='sm'>Fill in the details below to add a new property.</Text>
      </Box>

      <VStack my='3px' spacing='2px'>
        <Box maxWidth='500px'>
          <form onSubmit={handleSubmit}>
            <Input placeholder="Enter the type*" type="text" value={property.type} onChange={(e) => setProperty({ ...property, type: e.target.value })} />
            <Input my='2' placeholder="Enter the Property Name*" type="text" value={property.name} onChange={(e) => setProperty({ ...property, name: e.target.value })} />
            <Input my='2' placeholder="Enter the description" type="text" value={property.description} onChange={(e) => setProperty({ ...property, description: e.target.value })} />
            <Input my='2' placeholder="Enter the image URL*" type="text" value={property.image} onChange={(e) => setProperty({ ...property, image: e.target.value })} />
            <Input my='2' placeholder="Enter the large image URL" type="text" value={property.imageLg} onChange={(e) => setProperty({ ...property, imageLg: e.target.value })} />
            <Input my='2' placeholder="Enter the country*" type="text" value={property.country} onChange={(e) => setProperty({ ...property, country: e.target.value })} />
            <Input my='2' placeholder="Enter the address*" type="text" value={property.address} onChange={(e) => setProperty({ ...property, address: e.target.value })} />
            <Input my='2' placeholder="Enter the number of bedrooms*" type="number" value={property.bedrooms} onChange={(e) => setProperty({ ...property, bedrooms: e.target.value })} />
            <Input my='2' placeholder="Enter the number of bathrooms*" type="number" value={property.bathrooms} onChange={(e) => setProperty({ ...property, bathrooms: e.target.value })} />
            <Input my='2' placeholder="Enter the surface area in sqft*" type="text" value={property.surface} onChange={(e) => setProperty({ ...property, surface: e.target.value })} />
            <Input my='2' placeholder="Enter the price in Rupee" type="number" value={property.price} onChange={(e) => setProperty({ ...property, price: e.target.value })} />
            <Input my='2' placeholder="Enter the agent's name" type="text" value={property.agent.name} onChange={(e) => setProperty({ ...property, agent: { ...property.agent, name: e.target.value } })} />
            <Input my='2' placeholder="Enter the agent's phone number" type="text" value={property.agent.phone} onChange={(e) => setProperty({ ...property, agent: { ...property.agent, phone: e.target.value } })} />
            <HStack my='5'>
              <Button type="submit" colorScheme="blue">
                Add Property
              </Button>
              <Button onClick={() => navigate('/')} colorScheme="red">
                Cancel
              </Button>
            </HStack>
          </form>
        </Box>
      </VStack>
    </VStack>
  );
};

export default AddProperty;