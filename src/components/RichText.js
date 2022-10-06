import React from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';

function RichText({ heading, text }) {
  return (
    <Box p="1.5rem">
      <Center
        display="flex"
        flexDir="column"
        pt="2rem"
        alignItems="center"
        justifyContent="center"
      >
        <Heading className="text-in-expand" py="2rem">
          {heading && heading}
        </Heading>
        <Text textAlign="justify" pb="2rem" mx="3rem">
          {text && text}
        </Text>
      </Center>
    </Box>
  );
}

export default RichText;
