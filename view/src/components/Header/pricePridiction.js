import axios from 'axios';

export const predictPrice = async (bedrooms, bathrooms, surface) => {
  const response = await axios.post('http://localhost:5100/predict_price', {
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    surface: surface
  });
  return response.data;
};
