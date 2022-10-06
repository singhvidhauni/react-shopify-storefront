import React from 'react';
import { Box, Image, Flex, Heading, Text, Button } from '@chakra-ui/react';

function ImageWithText({ reverse, image, heading, text }) {
  const reverseSection = reverse ? 'row-reverse' : 'row';
  return (
    <Box p="1rem">
      <Flex flexDir={['column', reverseSection]} w="100%">
        <Image
          src={image}
          objectFit={['contain', 'cover']}
          w={['100%', '50%']}
          h={['50vh', '70vh']}
        />
        <Flex
          w={['100%', '50%']}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Heading textAlign={['center', 'justify']} py={['1rem', '1rem']}>
            {heading && heading}
          </Heading>
          <Text textAlign={['justify', 'justify']} py={['1rem', '1rem']}>
            {text && text}
          </Text>
          <Button
            backgroundColor="#D776E9"
            color="white"
            _hover={{ opacity: '80%' }}
          >
            Buy Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ImageWithText;
