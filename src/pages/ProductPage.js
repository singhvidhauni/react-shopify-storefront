import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopDataContext';
import {
  Box,
  Image,
  Grid,
  Text,
  Button,
  Heading,
  Flex,
} from '@chakra-ui/react';

const ProductPage = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, product, addItemToCheckout } =
    useContext(ShopContext);
  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);
  if (!product.title) return <div>Loading...</div>;
  return (
    <Box p="2rem">
      <Grid
        templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
        gap={4}
        alignItems="center"
        justifyContent="center"
        py={['5rem', '1rem']}
      >
        <Image src={product.images[0].src} />
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading textAlign="center" pb="1rem">
            {product.title}
          </Heading>
          <Text pb="1rem" fontWeight="bold">
            {product.variants[0].price}
          </Text>
          <Text pb="2rem" textAlign="justify">
            {product.description}
          </Text>
          <Button
            bg="#D776E9"
            _hover={{ opacity: '70%' }}
            color="white"
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          >
            Add To Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProductPage;
