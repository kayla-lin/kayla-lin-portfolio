import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  localStoragePrefix: 'kayla-lin-portfolio',
};

export const theme = extendTheme({
  config,
  styles: {
    global: props => ({
      body: {
        bg: mode('gray.50', 'gray.900')(props),
      },
    }),
  },
});
