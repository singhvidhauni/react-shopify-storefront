import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopDataContext';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
import Hero from '../components/Hero';
import ImageWithText from '../components/imageWithText';
import RichText from '../components/RichText';
const Home = () => {
  const { fetchAllProducts, products, productImage } = useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  if (!products) return <div>Loading ...</div>;
  return (
    <Box>
      <Hero />
      <RichText
        heading="Rich Text Heading"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi quas error quos culpa, provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi quas error quos culpa, provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi quas error quos culpa, provident."
      />
      <ImageWithText
        reverse={true}
        image={productImage}
        heading="Smart footwear"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi quas error quos culpa, provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi quas error quos culpa, provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi quas error quos culpa, provident."
      />
      <Grid templateColumns={['repeat(1,1fr)', 'repeat(3,1fr)']} gap={4}>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.handle}`}>
              <Box textAlign="center" backgroundColor={['#000', '#fff']}>
                <Text mt="2rem" fontSize="21px" fontWeight="bold">
                  {product.title}
                </Text>
                <Image
                  _hover={{ opacity: '90%', transform: 'scale(1.04)' }}
                  src={product.images[0].src}
                  alt={product.images[0].altText}
                  borderRadius={['50%', '0%']}
                />
                <Text
                  pb="2rem"
                  m="1rem"
                  textAlign="justify"
                  maxH="100px"
                  overflow="hidden"
                  color={['#fff', '#000']}
                >
                  {product.description}
                </Text>
                <Text pb="1rem" fontWeight="bold" color={['#fff', '#000']}>
                  {product.variants[0].price}
                </Text>
              </Box>
            </Link>
          </div>
        ))}
      </Grid>
      <ImageWithText
        reverse={false}
        image={productImage}
        heading="luxurious Footwears"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi quas error quos culpa, provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea animi quas error quos culpa, provident."
      />
    </Box>
  );
};

export default Home;
