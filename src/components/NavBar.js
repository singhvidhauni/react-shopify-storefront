import React, { useContext } from 'react';
import { ShopContext } from '../context/shopDataContext';
import { Flex, Icon, Box, Badge } from '@chakra-ui/react';
import { MdMenu, MdShoppingBasket } from 'react-icons/md';
import { GiAbstract024 } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function NavBar() {
  const { openCart, openMenu, checkout } = useContext(ShopContext);
  return (
    <Flex
      flexDir="row"
      backgroundColor="black"
      alignItems="center"
      justifyContent="space-between"
      p="2rem"
      w="100%"
      position="fixed"
      zIndex={999}
    >
      <Icon
        onClick={() => openMenu()}
        cursor="pointer"
        fill="white"
        as={MdMenu}
        w={30}
        h={30}
      >
        Menu
      </Icon>
      <Link to="/">
        <Icon fill="white" as={GiAbstract024} w={50} h={50}></Icon>
      </Link>
      <Box>
        <Icon
          onClick={() => openCart()}
          cursor="pointer"
          fill="white"
          as={MdShoppingBasket}
          w={30}
          h={30}
        >
          {' '}
          Cart
        </Icon>
        <Badge backgroundColor="#D776E9" variant="solid" rounded="full">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
}

export default NavBar;
