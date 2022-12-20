import { Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const WavyText = ({ text, replay, ...props }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 1 },
    },
  };

  const child = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 15,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      style={{ display: 'flex', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate={'show'}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.div display="inline" key={index} variants={child}>
          <Text as="span">{letter === ' ' ? '\u00A0' : letter}</Text>
        </motion.div>
      ))}
    </motion.h1>
  );
};

export default WavyText;
