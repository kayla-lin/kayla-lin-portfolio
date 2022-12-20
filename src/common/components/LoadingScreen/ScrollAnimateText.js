import { Box, Button, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollAnimateText = () => {
  const [replay, setReplay] = useState(true);

  const item = {
    hidden: {
      y: [-100, 0],
      color: '#0055FF',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: [0, 100],
      color: '#FF0088',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const controls = useAnimation();

  const handleReplay = () => {
    controls.start('visible');
  };
  const handleReplay2 = () => {
    controls.start('hidden');
  };

  return (
    <Box>
      <Button onClick={handleReplay}>1</Button>
      <Button onClick={handleReplay2}>2</Button>

      <Heading overflow="hidden">
        <motion.div initial="hidden" variants={item} animate={controls}>
          texttext
        </motion.div>
      </Heading>
    </Box>
  );
};

export default ScrollAnimateText;
