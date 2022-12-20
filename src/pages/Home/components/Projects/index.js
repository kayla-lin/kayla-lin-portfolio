import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import {
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { forwardRef, useEffect, useRef } from 'react';
import ChakraMotionBox from '../../../../common/components/ChakraMotionBox';
import { PROJECTS } from '../../../../common/constants';

import Project from './Project';

const Projects = forwardRef((props, ref) => {
  // * Rocket ship
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 500, 3000], [330, 0, -200]);
  const translateX = useTransform(scrollY, [0, 500, 3000], [-300, 0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [100, 0]);

  // * Fade entire section into view
  const opacity = useTransform(scrollY, [0, 1800], [0, 1]);

  // * Scroll into view cascade
  const projectCardsRef = useRef(null);
  const isInView = useInView(projectCardsRef, { once: true });
  const controls = useAnimation();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: [0, 1],
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: [0, 1],
      translateY: [100, 0],
      transition: {
        type: 'spring',
        stiffness: 50,
        duration: 1,
        velocity: 2,
      },
    },
  };
  useEffect(() => {
    if (isInView) {
      console.log('show');
      controls.start('show');
    }
  }, [controls, isInView]);

  return (
    <ChakraMotionBox
      display="flex"
      style={{ opacity }}
      ref={ref}
      flexDir="column"
      py={50}
      w="100%"
      minH="100vh"
      align="center"
    >
      <VStack>
        <HStack pos="relative">
          <Text
            fontWeight={900}
            fontSize={{ base: '3xl', sm: '5xl', md: '8xl' }}
            textTransform="lowercase"
          >
            Projects
          </Text>
          <ChakraMotionBox
            pos="absolute"
            bottom="-80%"
            right="30%"
            fontSize="40px"
            zIndex={50}
            style={{ translateY, translateX, rotate }}
          >
            🚀
          </ChakraMotionBox>
        </HStack>
        <Text
          textTransform="lowercase"
          fontWeight={700}
          fontSize="18px"
          opacity="80%"
        >
          I had a blast working on these projects
        </Text>
      </VStack>
      {/* Project cards */}
      <ChakraMotionBox
        variants={container}
        animate={controls}
        h="100%"
        w="100%"
        initial="hidden"
        display="flex"
        justify="center"
        align="center"
        ref={projectCardsRef}
      >
        <VStack w="100%">
          {PROJECTS.map(project => (
            <Flex justify="center" align="center" key={project.heading}>
              <ChakraMotionBox variants={item}>
                <Project project={project} />
              </ChakraMotionBox>
            </Flex>
          ))}
        </VStack>
      </ChakraMotionBox>
    </ChakraMotionBox>
  );
});

export default Projects;
