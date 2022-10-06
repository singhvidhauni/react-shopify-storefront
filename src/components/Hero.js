import React from 'react';
import { Box, Text, Button, Image, Center } from '@chakra-ui/react';

function Hero() {
  return (
    <Box backgroundColor="#FFABE2" position="relative">
      <Image
        src="https://cdn.shopify.com/static/sample-images/shoes.jpeg"
        objectFit="cover"
        objectPosition="center"
        h="100vh"
        w="100vw"
      />
      <Center>
        <Text
          className="text-in-expand"
          p="0 1rem 0 1rem"
          position="absolute"
          fontSize="42px"
          fontWeight="bold"
          top="30%"
          color="#000"
          textAlign="center"
        >
          Welcome to ShoesMataaz!
        </Text>
        <Button
          position="absolute"
          bottom="40%"
          backgroundColor="#D776E9"
          color="white"
          _hover={{ opacity: '80%' }}
        >
          Shop now
        </Button>
      </Center>
    </Box>
  );
}

export default Hero;
