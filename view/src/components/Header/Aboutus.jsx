import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import House from '../../assets/images/houseBanner.jpg';

const AboutUs = () => {
  return (
    <VStack border='1px' borderColor='blue.100' boxShadow='md' px='5' py='6' mt='10' mb='10'>
      <Image src={House} width='100%' height='300px' />
      <Box maxW="800px" mx="auto" px="6">
        <Heading>About Us</Heading>
        <Text fontSize="xl" my="8">
          At GharWale, we believe that everyone deserves to find their dream home. That's why we're dedicated to providing exceptional service and helping our clients find the perfect property that meets their needs and exceeds their expectations.
        </Text>
        <Text fontSize="xl" my="8">
          Our team of experienced real estate agents is committed to guiding you through every step of the buying or selling process. We understand that buying or selling a home can be a stressful experience, which is why we prioritize clear communication, honesty, and transparency in all our interactions.
        </Text>
        <Text fontSize="xl" my="8">
          Whether you're looking for your first home, your forever home, or an investment property, we're here to help. Contact us today to learn more about our services and how we can help you achieve your real estate goals.
        </Text>
      </Box>
    </VStack>
  );
};

export default AboutUs;
