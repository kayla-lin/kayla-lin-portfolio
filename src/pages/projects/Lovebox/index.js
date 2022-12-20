import { Heading, Image, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import loveboxFigma from '../../../assets/png/lovebox-figma.png';
import loveboxDatabase from '../../../assets/png/lovebox-database.png';

const LoveBox = () => {
  return (
    <PageWrapper title="Lovebox">
      <VStack w="100%">
        <Image
          w="100%"
          src="https://i.gyazo.com/9094a25f5f8d9a81e1343e30a5d0188d.gif"
          alt="Lovebox opening present animation"
          objectFit="cover"
          h={600}
        />
        <Text alignSelf="center" fontStyle="italic">
          Opening animation for a message from a lovebox
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Heading>The origins</Heading>
        <Text>
          The project started out as a way to emulate the viral social media
          trend of sending and recieving a <Link color="pink.100">lovebox</Link>
          . However, the greater goal was to create an experience that could
          make sending and recieving messages special. The purpose of my lovebox
          project is to create a messaging experience that would make your
          reciever feel appreciated.
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Heading>Planning</Heading>
        <Text>
          First, I designed the wireframe. Often when designing the user
          interface for personal projects, I start to actual code it out and
          change my mind about a lot of design decisions (I even changed the
          name!). So, my design here is very outdated. I find it easiest to
          design when I actual interact with it, but nonetheless wireframing
          helped me brainstorm the features I wanted.
        </Text>
        <Text>
          I wanted a unique messaging system, which I accomplished by allowing
          the user to split up a message or to send multiple messages in
          multiple notes. The sender of these messages could also choose to
          allow the recipient to open the note once a day or all at once.
        </Text>
      </VStack>
      <VStack w="100%">
        <Image src={loveboxFigma} alt="Figma design of lovebox" />
        <Text alignSelf="center" fontStyle="italic">
          Figma draft design of lovebox
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Text>
          Using the designs, I planned out the database. Firebase is a NoSQL
          database, which is pretty strange compared to a traditional relational
          database. The firebase database design can be extremely catered to the
          actual interface design. In this case, because I want to separate sent
          and recieved packages on the interface, the database reflects this!
        </Text>
      </VStack>
      <VStack w="100%">
        <Image src={loveboxDatabase} alt="Firebase design of lovebox" />
        <Text alignSelf="center" fontStyle="italic">
          Firebase database design of a user's packages (sent and recieved)
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Heading>Execution</Heading>
        <Text>
          I chose React as my front end framework (I use framework and library
          interchangably here). However, for my styling, I used CSS modules,
          which means handwritten CSS. This choice definitely increased the
          development time. I would have wished I used a CSS library or
          framework here to speed development time.
        </Text>
        <Text>
          I used{' '}
          <Link
            color="pink"
            href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
            isExternal
          >
            React Three Fiber
          </Link>
          , which is a React wrapper for{' '}
          <Link color="pink" href="https://threejs.org/" isExternal>
            three.js
          </Link>{' '}
          a really cool library to insert 3D animated models into web pages, to
          create utilize 3D models. As lovebox was going to be a unique
          messaging app, I used what other messaging applications do not use...
          3D models! I created models using{' '}
          <Link color="pink" href="https://ephtracy.github.io/" isExternal>
            MagicaVoxel
          </Link>{' '}
          to get the cubic models. Then, I animated each model in Blender.
          Lastly, React Three Fiber rendered the animation onto the web page.
        </Text>
      </VStack>
      <VStack w="100%">
        <Image
          src="https://i.gyazo.com/6e667524d6f2382cd4799938a2dba9c0.gif"
          alt="Spinning animation for lovebox"
          width="100%"
          objectFit="cover"
        />
        <Text alignSelf="center" fontStyle="italic">
          Spinning animation for lovebox
        </Text>
      </VStack>
      <VStack w="100%">
        <Image
          src="https://i.gyazo.com/8fc18e7f4f257074794ef49d8d4c9ef8.gif"
          alt="Spinning animation for lovebox"
          width="100%"
          objectFit="cover"
        />
        <Text alignSelf="center" fontStyle="italic">
          Animated bear peeking out of present
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Heading>Final thoughts</Heading>
        <Text>
          This is probably my favorite project I've done! I plan to remake
          Lovebox sometime in the future. I want Lovebox to consist of a
          monorepo with both a ReactJS and React Native application. Though I
          love the website the way it is, a messaging mobile application would
          be extremely convenient.
        </Text>
      </VStack>
    </PageWrapper>
  );
};

export default LoveBox;
