import { Routes, Route } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import Header from './components/Header/Header';
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import Footer from './components/Footer';
import HouseProvider from './context/HouseContext';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import Signup from './routes/Signup';
import Loginup from './routes/Loginup';
import AddProperty from './routes/AddProperty';
import About_Us from './routes/AboutUs';
import Contact_Us from './routes/ContactUs';
import PricePredictor from './routes/PricePredictor';


const App = () => {
  return (
    <HouseProvider>
      <Container maxW='container.lg' px='6'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seller" element={<AddProperty />} />
          <Route path="/priceprediction" element={<PricePredictor />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutUs" element={<About_Us />} />
          <Route path="/contactUs" element={<Contact_Us />} />
          <Route path="/login" element={<Loginup />} />
          <Route path="/property-details" element={<PropertyDetails />} >
            <Route path=":propertyId" element={<HouseDetails />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Container>
      <Footer />
    </HouseProvider>
  );
};

export default App;
