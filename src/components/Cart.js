import React, { useContext } from 'react';
import { ShopContext } from '../context/shopDataContext';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Grid,
  Text,
  Image,
  Flex,
  Link,
  Box,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

function Cart() {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);
  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your shopping Cart</DrawerHeader>

          <DrawerBody>
            {checkout.lineItems?.length ? (
              checkout.lineItems.map((item) => (
                <Grid
                  templateColumns="repeat(4,1fr)"
                  gap={1}
                  key={item.id}
                  backgroundColor="#000"
                  my=".2rem"
                  color="white"
                  py=".5rem"
                >
                  <Flex alignItems="center" justifyContent="center" m=".1rem">
                    <CloseIcon
                      onClick={() => removeLineItem(item.id)}
                      cursor="pointer"
                    />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center" m=".1rem">
                    <Image
                      src={item.variant.image.src}
                      w={50}
                      h={50}
                      borderRadius="50%"
                    />
                  </Flex>
                  <Flex alignItems="center" justifyContent="center" m=".1rem">
                    <Text>{item.title}</Text>
                  </Flex>
                  <Flex alignItems="center" justifyContent="center" m=".1rem">
                    <Text>{item.variant.price}</Text>
                  </Flex>
                </Grid>
              ))
            ) : (
              <Box w="100%" h="100%">
                <Text
                  h="100%"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  Empty Cart
                </Text>
              </Box>
            )}
          </DrawerBody>
          {checkout.lineItems?.length ? (
            <DrawerFooter>
              <Button
                backgroundColor="#D776E9"
                color="white"
                _hover={{ opacity: '80%' }}
                w="100%"
              >
                <Link href={checkout.webUrl}>Checkout</Link>
              </Button>
            </DrawerFooter>
          ) : null}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Cart;
