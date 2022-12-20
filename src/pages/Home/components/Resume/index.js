import {
  Box,
  Button,
  Center,
  createIcon,
  Flex,
  Heading,
  Icon,
  Link,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import {
  useAnimation,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { ComposableMap } from 'react-simple-maps';
import ChakraMotionBox from '../../../../common/components/ChakraMotionBox';
import Map from './Map';
import Markers from './Markers';
import { motion } from 'framer-motion';
import TransparentButton from '../../../../common/components/TransparentButton';
import { ArrowRightIcon, RepeatIcon, ViewIcon } from '@chakra-ui/icons';
import resume from '../../../../assets/pdf/resume.pdf';

const EXPERIENCES = [
  {
    coordinates: [-80, 47],
    workplace: 'Ghamut Corporation',
    role: 'UI/UX Consultant',
    bullets: [
      'Lead the user interface redesign of 15+ pages of National Institutes of Health’s BRAINWORKS project',
      'Improved code maintainability by suggesting and implementing a front end framework:  ReactJS with Typescript & Redux',
      'Converted Flask backend to become a RESTful API',
      'Provided thorough documentation and updated records for future team members',
      'Incorporated feedback from clients throughout the creation process to ensure that all specifications are met',
    ],
  },
  {
    coordinates: [-85, 40],
    workplace: 'StudyFind',
    role: 'Software Developer',
    bullets: [
      'Managed 4 software developers: delegated tasks and assist with debugging',
      'Created 5 iterations of the landing page using React, Firebase, Chakra UI, HTML5/CSS3',
      'Converted 2 React Javascript GitHub repositories into a NextJS Typescript monolith',
    ],
  },
];

export default function Resume() {
  const [experience, setExperience] = useState();

  const starting = 100;
  const ending = starting + 600;

  const handleClearExperience = () => {
    setExperience(null);
  };

  // * Earth rolling in
  const { scrollY } = useScroll();
  const rotate = useTransform(
    scrollY,
    [starting, ending, ending + 1000],
    [20, 5, -10]
  );
  // * Earth fade up
  const earthRef = useRef(null);
  const isInView = useInView(earthRef, {
    once: true,
    margin: '0px 150px -50px 0px',
  });
  const controls = useAnimation();
  const animateShowEarth = {
    hidden: { opacity: 0 },
    show: {
      y: [80, 0],
      opacity: [0, 1],
      backgroundImage: [
        'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        'linear-gradient(90deg, rgba(148,187,233,1) 0%, rgba(238,174,202,1) 100%)',
        'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
      ],
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

  // * Arrow
  const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
        fill="currentColor"
      />
    ),
  });

  return (
    <>
      <SimpleGrid
        columns={{ base: 0 }}
        px={0}
        py={150}
        pos="relative"
        overflow="clip"
        gap={50}
      >
        <Flex
          justify="center"
          align="center"
          boxSizing="border-box"
          pl={{ base: '0px', md: '100px' }}
          px={{ base: 'auto', md: '0' }}
        >
          <ChakraMotionBox
            pos="relative"
            h={{ base: '300px', md: '225px' }}
            px={{ base: '40px', md: 0 }}
          >
            {experience ? (
              <VStack
                align="flex-start"
                mx={{ base: '0px', md: '50px' }}
                h={{ base: '300px', md: '100%' }}
                ml={{ base: '10px', md: '100px' }}
              >
                <TransparentButton
                  textTransform="lowercase"
                  opacity="80%"
                  leftIcon={<RepeatIcon />}
                  onClick={handleClearExperience}
                >
                  Reset
                </TransparentButton>
                <Text fontWeight={700} fontSize="18px">
                  {experience.workplace}
                </Text>
                <Text>{experience.role}</Text>
                <UnorderedList pl={5} fontSize="sm">
                  {experience.bullets.map(bullet => (
                    <ListItem key={bullet}>{bullet}</ListItem>
                  ))}
                </UnorderedList>
              </VStack>
            ) : (
              <VStack
                align={{ base: 'center' }}
                justify={{ base: 'flex-end' }}
                h={{ base: '100%' }}
                px={{ md: 'auto' }}
                textAlign="center"
              >
                <Text
                  textTransform="lowercase"
                  fontWeight={700}
                  fontSize="18px"
                  opacity="80%"
                >
                  Click to view places where I've left my mark
                </Text>
                <Text
                  fontWeight={900}
                  fontSize={{ base: '3xl', sm: '5xl', md: '8xl' }}
                  textTransform="lowercase"
                >
                  Experiences
                </Text>
                <Link target="_blank" href={resume}>
                  <Button p={5} variant="outline">
                    Or see my resume
                  </Button>
                </Link>
              </VStack>
            )}
          </ChakraMotionBox>
        </Flex>
        <Flex w="100%" h="100%" justify="center" align="center">
          <ChakraMotionBox
            display="flex"
            style={{ rotate }}
            w={{ base: '300px', sm: '400px', md: '500px' }}
            h={{ base: '300px', sm: '400px', md: '500px' }}
            bg="blue.100"
            borderRadius={500}
            justify="center"
            align="center"
            pos="relative"
            overflow="hidden"
            variants={animateShowEarth}
            animate={controls}
            ref={earthRef}
            initial="hidden"
          >
            <Box
              w="300%"
              scale={3}
              h="300%"
              top="-15%"
              pos="absolute"
              left="-20%"
              borderRadius={500}
            >
              <ComposableMap>
                <Map />
                <Markers
                  experiences={EXPERIENCES}
                  setExperience={setExperience}
                />
              </ComposableMap>
            </Box>
          </ChakraMotionBox>
        </Flex>
      </SimpleGrid>
    </>
  );
}
