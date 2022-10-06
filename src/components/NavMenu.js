import {
  Drawer,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  VStack,
  Link,
  Text,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ShopContext } from '../context/shopDataContext';

function NavMenu() {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);
  return (
    <>
      <Drawer
        isOpen={isMenuOpen}
        onClose={closeMenu}
        placement="left"
        size="xs"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack p="2rem">
                <Link to="/">About Us</Link>
                <Link to="/">Learn More</Link>
                <Link to="/">Sustainability</Link>
              </VStack>
            </DrawerBody>
            <DrawerFooter textAlign="center">
              <Text w="100%">
                &#169; Copyright Shopify React Headless CMS API
              </Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default NavMenu;
