import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <Box as="nav" pos="fixed" w="100%" bg="black">
      <Flex w="100%" justify="flex-end">
        <Text>Experience</Text>
        <Text>Projects</Text>
        <Text>Contact</Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
