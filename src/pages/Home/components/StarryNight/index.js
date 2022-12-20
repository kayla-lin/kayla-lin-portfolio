import { Box } from '@chakra-ui/react';
import { useMotionValue, useScroll, useTransform } from 'framer-motion';
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import ChakraMotionBox from '../../../../common/components/ChakraMotionBox';

const StarryNight = () => {
  const particlesInit = useCallback(async engine => {
    await loadStarsPreset(engine);
  }, []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 1500], [1, 0]);

  const options = {
    preset: 'stars',
    background: {
      color: {
        value: 'transparnet',
      },
    },
    zindex: -10,
  };

  return (
    <ChakraMotionBox
      pos="absolute"
      bottom="-80%"
      right="-10%"
      fontSize="40px"
      zIndex={-50}
      opacity="20%"
    >
      <Particles id="tsparticles" options={options} init={particlesInit} />
    </ChakraMotionBox>
  );
};

export default StarryNight;
