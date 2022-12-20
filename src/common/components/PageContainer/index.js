import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <Flex w="100%" h="100%" justify="center" flexDir="column">
      <Box maxW="1600px" h="100%" mx="auto">
        {children}
      </Box>
    </Flex>
  );
};

export default PageContainer;
