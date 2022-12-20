import { Button } from '@chakra-ui/react';
import React from 'react';

const TransparentButton = props => {
  return (
    <Button
      variant="ghost"
      px={0}
      py={0}
      _hover={{ bg: 'transparent', opacity: '80%' }}
      _active={{ bg: 'transparent' }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default TransparentButton;
