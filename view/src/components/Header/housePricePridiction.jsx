import { useState } from 'react';
import { VStack, Box, Text, Input, Button } from '@chakra-ui/react';
import axios from 'axios';

const PricePredictionPage = () => {
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [surface, setSurface] = useState('');
  const [predictedPrice, setPredictedPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/predict_price', {
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        surface: surface
      });
      setPredictedPrice(response.data.predicted_price);
    } catch (error) {
      alert(`Error predicting price: ${error}`);
    }
  };

  return (
    <VStack minHeight="100vh" spacing={8} alignItems="center" justifyContent="center" bgGradient="linear(to bottom, blue.100, purple.300)">
      <Box w="100%" maxW="md" p={8} borderRadius="lg" boxShadow="md" bg="white">
        <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center" color="blue.500">
          Price Prediction
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Text fontWeight="bold">Bedrooms</Text>
            <Input
              type="number"
              placeholder="Number of bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              borderColor="blue.200"
              borderRadius="lg"
            />
            <Text fontWeight="bold">Bathrooms</Text>
            <Input
              type="number"
              placeholder="Number of bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              borderColor="blue.200"
              borderRadius="lg"
            />
            <Text fontWeight="bold">Surface (in square meters)</Text>
            <Input
              type="number"
              placeholder="Surface area"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
              borderColor="blue.200"
              borderRadius="lg"
            />
            <Button type="submit" colorScheme="blue" borderRadius="lg">
              Predict Price
            </Button>
          </VStack>
        </form>
      </Box>
      {predictedPrice && (
        <Box w="100%" maxW="md" p={6} borderRadius="lg" boxShadow="md" bg="white">
          <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center" color="blue.500">
            Predicted Price
          </Text>
          <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="blue.700">
            ₹{predictedPrice}
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default PricePredictionPage;
