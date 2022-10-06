import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Text, Grid, Box, Image, VStack } from '@chakra-ui/react';
import { ShopContext } from '../context/shopDataContext';

function Footer() {
  const { productImage } = useContext(ShopContext);
  return (
    <Box backgroundColor="black" color="white" fontWeight="bold" mt="2rem">
      <Grid templateColumns={['repeat(1,1fr)', 'repeat(3, 1fr)']} gap="50px">
        <Image
          src={productImage}
          objectFit="cover"
          borderRadius="50%"
          p="1.5rem"
        />
        <VStack
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Link to={'/'}>
            <Text>The Green Blast</Text>
          </Link>
          <Link to={'/'}>
            <Text>The Blue Berry</Text>
          </Link>
          <Link to={'/'}>
            <Text>The Yellow Mellow</Text>
          </Link>
        </VStack>
        <VStack
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Link to="/">
            <Text>Learn More</Text>
          </Link>
          <Link to="/">
            <Text>About Us</Text>
          </Link>
          <Link to="/">
            <Text>Sustainability</Text>
          </Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          w="100%"
          textAlign="center"
          borderTop="1px solid white"
          p="1rem"
          backgroundColor="#D776E9"
        >
          &#169; Copyright Shopify React Headless CMS API
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
