import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { Flex, Heading } from '@chakra-ui/react';
import ScrollAnimateText from './ScrollAnimateText';
export default function LoadingScreen() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [{ type: 'heading1', text: 'Kayla Lin' }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <Flex
      w="100%"
      h="100vh"
      bg="gray.900"
      justify="center"
      align="center"
      pos="absolute"
      zIndex={1000}
    >
      <motion.div
        initial="hidden"
        animate={replay ? 'visible' : 'hidden'}
        variants={container}
      >
        <Heading>
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </Heading>
        <button onClick={handleReplay}>
          Replay <span>⟲</span>
        </button>
        <ScrollAnimateText />
      </motion.div>
    </Flex>
  );
}
