import { Text, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Marker } from 'react-simple-maps';
import { motion, isValidMotionProp } from 'framer-motion';
import ChakraMotionBox from '../../../../common/components/ChakraMotionBox';

const Markers = ({ experiences, setExperience }) => {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      {experiences.map((experience, index) => (
        <Marker
          coordinates={experience.coordinates}
          fill="#777"
          key={JSON.stringify(experience.coordinates)}
          onClick={() => {
            setExperience(experience);
            setSelected(index);
          }}
          onMouseOver={() => {
            setExperience(experience);
            setSelected(index);
          }}
          onMouseLeave={() => {
            setExperience(experience);
            setSelected(index);
          }}
        >
          <g transform="scale(0.5)">
            <motion.g
              fill="none"
              stroke={selected === index ? '#FED7E2' : '#FFF'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
              animate={{ y: ['-0.1%', '0.3%', '-0.1%'] }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </motion.g>
          </g>
        </Marker>
      ))}
    </>
  );
};

export default Markers;
