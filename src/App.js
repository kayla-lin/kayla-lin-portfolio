import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import AppRouter from './setup/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './setup/Theme/theme';
import { ParallaxProvider } from 'react-scroll-parallax';
import ProjectContextProvider from './feature/projectContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProjectContextProvider>
        <ParallaxProvider>
          <BrowserRouter>
            {/* <LoadingScreen /> */}
            <Container maxW="6xl">
              <AppRouter />
            </Container>
          </BrowserRouter>
        </ParallaxProvider>
      </ProjectContextProvider>
    </ChakraProvider>
  );
}

export default App;
