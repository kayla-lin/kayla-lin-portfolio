import {
  Box,
  Grid,
  GridItem,
  Heading,
  VStack,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useScroll, useTransform } from 'framer-motion';
import ChakraMotionBox from '../../../../common/components/ChakraMotionBox';
import { FaChevronCircleDown } from 'react-icons/fa';
import { StarIcon } from '@chakra-ui/icons';
import { forwardRef } from 'react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

const Hero = forwardRef((_, ref) => {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 400], [330, -90]);
  const opacity = useTransform(scrollY, [0, 390, 400], [0, 1, 0]);
  const rotate = useTransform(scrollY, [0, 400], [0, 360]);

  const handleScrollToProject = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChakraMotionBox w="100%" pl={{ base: 0 }} h="900px" overflow="hidden">
      {/* Text */}
      <VStack
        h="100%"
        justify="center"
        align="flex-start"
        px={{ base: 10, md: 50 }}
      >
        <ChakraMotionBox
          variants={container}
          initial="hidden"
          animate="show"
          pos="relative"
        >
          <VStack align="flex-start" spacing={0}>
            <ChakraMotionBox variants={item} maxW="5xl">
              <Text
                textTransform="lowercase"
                fontWeight={700}
                fontSize="18px"
                opacity="80%"
              >
                Making products out of this world
              </Text>
              <Heading
                fontWeight={900}
                fontSize={{ base: '3xl', sm: '5xl', md: '8xl' }}
                textTransform="lowercase"
              >
                {' '}
                Kayla Lin <StarIcon display="inline" />
                <Box>
                  <ChakraMotionBox
                    animate={{
                      bgClip: 'text',
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
                    display="inline"
                    justifyContent="center"
                    alignItems="center"
                    bgClip="text"
                    fontWeight={900}
                    size="2xl"
                    textTransform="lowercase"
                  >
                    Full Stack Developer
                  </ChakraMotionBox>
                </Box>
              </Heading>
            </ChakraMotionBox>
            {/* Space ship w/ cow */}
            <ChakraMotionBox variants={item}>
              <VStack
                pos="absolute"
                justify="center"
                align="flex-start"
                zIndex={5}
                top="0%"
                right="20%"
              >
                <ChakraMotionBox
                  animate={{
                    x: ['-10%', '10%'],
                    y: ['5%', '10%', '5%'],
                    rotate: [10, 30],
                  }}
                  transition={{
                    duration: 3,
                    ease: 'easeInOut',
                    yoyo: Infinity,
                    repeatType: 'loop',
                  }}
                  zIndex={100}
                >
                  <Text fontSize="100px">🛸</Text>
                </ChakraMotionBox>
                {/* Cow */}
                <ChakraMotionBox
                  pos="relative"
                  left="30px"
                  fontSize="40px"
                  zIndex={50}
                  style={{ translateY, opacity, rotate }}
                >
                  🐄
                </ChakraMotionBox>
              </VStack>
            </ChakraMotionBox>
            {/* See projects */}
            <ChakraMotionBox variants={item}>
              <Button
                onClick={handleScrollToProject}
                size="lg"
                p={0}
                variant="ghost"
                opacity="80%"
                _hover={{ bg: 'transparent', opacity: '100%' }}
                _active={{ bg: 'transparent' }}
              >
                <HStack justify="center">
                  <Text>see projects</Text>{' '}
                  <ChakraMotionBox
                    animate={{
                      y: ['-10%', '20%', '-10%'],
                    }}
                    transition={{
                      duration: 3,
                      ease: 'easeInOut',
                      yoyo: Infinity,
                      repeatType: 'loop',
                    }}
                    zIndex={100}
                  >
                    <FaChevronCircleDown />
                  </ChakraMotionBox>
                </HStack>
              </Button>
            </ChakraMotionBox>
          </VStack>
        </ChakraMotionBox>
      </VStack>
    </ChakraMotionBox>
  );
});

export default Hero;
