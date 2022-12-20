import { HStack, Text, VStack } from '@chakra-ui/react';
import { useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import ChakraMotionBox from '../../../../common/components/ChakraMotionBox';

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, {
    once: true,
    margin: '0px 150px -50px 0px',
  });
  const controls = useAnimation();
  const animateShowText = {
    hidden: { opacity: 0 },
    show: {
      y: [80, 0],
      opacity: [0, 1],
      transition: {
        type: 'spring',
        stiffness: 300,
        duration: 0.7,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [controls, isInView]);

  return (
    <VStack
      justify="center"
      align="flex-end"
      w="100%"
      pos="relative"
      spacing={50}
      px={{ base: 10, md: 50 }}
      mb={200}
    >
      <HStack w="100%" justify="center" textAlign="center">
        <ChakraMotionBox
          variants={animateShowText}
          animate={controls}
          ref={aboutRef}
          initial="hidden"
        >
          <VStack align="center" maxW={{ base: '100%', sm: 'xl' }}>
            <Text
              textTransform="lowercase"
              fontWeight={700}
              fontSize="18px"
              opacity="80%"
            >
              Hello there stranger! ✨
            </Text>
            <Text fontSize="18px">
              My name is Kayla 👋 I am currently a Junior at the University of
              Rochester, and I love everything web development.
            </Text>
          </VStack>
        </ChakraMotionBox>
      </HStack>
    </VStack>
  );
};

export default About;
