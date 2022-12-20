import React from 'react';
import Hero from './components/Hero';
import StarryNight from './components/StarryNight';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { Box } from '@chakra-ui/react';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const Home = () => {
  const scrollToProject = useRef(null);
  const scrollRef = React.createRef();

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          inertia: 0.5,
        }}
        containerRef={scrollRef}
      >
        {/* <Navbar /> */}
        <Box data-scroll-section>
          <Hero data-scroll data-scroll-speed="4" ref={scrollToProject} />
          <About
            data-scroll
            data-scroll-class="fadeIn"
            data-scroll-repeat="true"
            data-scroll-direction="horizontal"
          />
          <Resume
            data-scroll
            data-scroll-speed="2"
            data-scroll-class="fadeIn"
            data-scroll-repeat="true"
            data-scroll-direction="horizontal"
          />
          <Projects
            data-scroll-class="fadeIn"
            data-scroll-repeat="true"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="-10"
            ref={scrollToProject}
          />
          {/* <Contact
          data-scroll-class="fadeIn"
          data-scroll-repeat="true"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="-10"
        /> */}
        </Box>

        <StarryNight />
      </LocomotiveScrollProvider>
    </>
  );
};

export default Home;
