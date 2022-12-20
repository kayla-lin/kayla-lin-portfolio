import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import ChakraMotionBox from '../../../../common/components/ChakraMotionBox';

const Contact = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      bg="gray.800"
      flexDir="column"
      pos="relative"
      mt={200}
    >
      <ChakraMotionBox
        pos="absolute"
        top={0}
        h={2}
        w="100%"
        animate={{
          backgroundImage: [
            'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
            'linear-gradient(90deg, rgba(148,187,233,1) 0%, rgba(238,174,202,1) 100%)',
            'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
          ],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <VStack spacing={10} maxW="4xl" textAlign="center" pt={50} py={150}>
        <Heading
          fontWeight={900}
          fontSize={{ base: '3xl', sm: '5xl', md: '8xl' }}
          textTransform="lowercase"
        >
          let's connect
        </Heading>

        <Text
          fontSize="3xl"
          textTransform="lowercase"
          fontWeight={700}
          opacity="80%"
        >
          Thank you for stopping by. If you would like to see more work, check
          out my{' '}
          <Box as="span" opacity="100%" zIndex={100}>
            GitHub
          </Box>{' '}
          Also, feel free to connect with me on LinkedIn if you have any
          questions or would just like to say hello
        </Text>
      </VStack>
    </Flex>
  );
};

export default Contact;
