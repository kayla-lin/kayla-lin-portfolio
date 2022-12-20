import {
  Heading,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import brainworksFigma from '../../../assets/png/brainworks-figma.png';
import brainworksHomeBefore from '../../../assets/png/brainworks-home-before.png';
import brainworksHomeAfter from '../../../assets/png/brainworks-home-after.png';
import brainworksToolsAfter from '../../../assets/png/brainworks-tools-after.png';
import brainworksToolsBefore from '../../../assets/png/brainworks-tools-before.png';

const BRAINWORKS = () => {
  return (
    <PageWrapper title="BRAINWORKS">
      <VStack align="flex-start">
        <Heading>What is BRAINWORKS?</Heading>
        <Text>
          BRAINWORKS is apart of the{' '}
          <Link
            href="https://braininitiative.nih.gov/"
            isExternal
            color="pink.100"
          >
            Brain Initiative
          </Link>{' '}
          from the National Institute of Health. The Brain Initiative "aim(s) at
          revolutionizing our understanding of the human brain" by "accelerating
          the development and application of innovative technologies". The
          purpose of BRAINWORKS is to create a tool that makes scientific
          research extremely consumable. Using data visualizers, BRAINWORKS aims
          to cut the time needed to absorb dense research papers with insightful
          visuals.
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Heading>What do I do?</Heading>
        <Text>
          I was brought onto the team at Ghamut Corporation to refresh the
          existing user interface. My responsibilities are to improve user
          experience by making intuitive understanding quicker and coming up
          with my own data visuals for the papers. However, after working on the
          project for a few months, I have remade the entire website and now I
          also do full stack by learning MySQL and Flask! So, technically my
          responsibilities include anything related to the website, front or
          backend.
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Heading>The beginning</Heading>
        <Text>
          (Feel free to play around on the{' '}
          <Link
            href="https://web.archive.org/web/20220815014255/https://brainworks.scigami.org/"
            isExternal
            color="pink.100"
          >
            {' '}
            old website
          </Link>{' '}
          on the wayback machine site)
        </Text>
        <Text>
          The original tech stack of BRAINWORKS consisted of a Flask application
          serving HTML files with Jinja--simply, a Flask application. I walked
          through the original website and noted some potential design changes.
          My top priority was to change the density of text and the branding to
          strengthen the branding.
        </Text>
        <Text>
          I created different Figma iterations of what the new pages could look
          like. I first chose to redesign the home page and original visualizer
          tool page, the graph page.
        </Text>
      </VStack>
      <VStack w="100%">
        <Image src={brainworksFigma} alt="Figma design of BRAINWORKS" />
        <Text alignSelf="center" fontStyle="italic">
          First draft of BRAINWORKS redesigned
        </Text>
      </VStack>
      {/* image of figma */}
      <VStack align="flex-start">
        <Heading>Transitioning</Heading>
        <Text>
          The actual implementation part was tricky. I had never worked with
          Flask previously. Additionally, I wanted to use React as the frontend
          framework, which added more complexity as I had never created a Flask
          React application. Luckily, I picked up easily with some helpful
          tutorials. I had to change all existing routes to be RESTful (though,
          the actual application is not RESTful entirely because cookie sessions
          are still in use).
        </Text>
        <Text>
          The new website looks extremely different from the the original first
          draft of the Figma designs. I had kept the main concepts of the Figma
          design in the current design. Time is valuable with short deadlines,
          so I chose this route for development. I had a faster time creating
          the actual website design, then designing it in Figma. So, over the
          course of the next few months the website look really changed. I'll
          highlight some of my favorite and notable changes.
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Heading>Home sweet home</Heading>
        <Text>
          The home page was my first redesign. It is probably one of the most
          drastic comparison photos. The previous home page had dense text and a
          large amount of the page was covered by a photo of the logo. The new
          home page has an attention grabbing title with a succinct description
          of the website. It builds credability mentioning the National
          Institute of Health. The web page establishes branding with circle
          imagery and blue branding. Lastly, I created a short animated video in
          After Effects of one of the visualizers, the triples graph, with
          motion--again to draw attention to new users.
        </Text>
      </VStack>
      <VStack w="100%">
        <Image src={brainworksHomeBefore} alt="Before redesign home page" />
        <Text alignSelf="center" fontStyle="italic">
          Before photo of home page
        </Text>
      </VStack>
      <VStack w="100%">
        <Image src={brainworksHomeAfter} alt="After redesign home page" />
        <Text alignSelf="center" fontStyle="italic">
          After photo of home page
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Heading>Sharper tool in the shed</Heading>
        <Text>
          Next, I changed the visualizer tools page. This page holds all the
          visualizer that the user can choose. The before or original design
          called this page the "graph" page. I put quotes over "graph" because
          there was not only graphs on this page (This is the reason for the
          name change to "visualizers" page).
        </Text>
        <Text>
          The previous visualizer page hid descriptions behind modals. In my
          redesign I chose to expose most of the information of each visualizer.
          Every visualizer has a photo of the actual tool. Additionally, there
          is a short description of the purpose, which you can find without the
          modal. I kept information about the specific visual under the
          "preview" button.
        </Text>
      </VStack>
      <VStack w="100%">
        <Image src={brainworksToolsBefore} alt="Before redesign tool page" />
        <Text alignSelf="center" fontStyle="italic">
          Before photo of tool page
        </Text>
      </VStack>
      <VStack w="100%">
        <Image src={brainworksToolsAfter} alt="After redesign tool page" />
        <Text alignSelf="center" fontStyle="italic">
          After photo of tool page
        </Text>
      </VStack>
      <VStack align="flex-start">
        <Heading>An ongoing process...</Heading>
        <Text>
          I am still in the process of maintaining the website. But, I've
          completed my original goal of completely refreshing the original
          website. Every page is completely redesign and recoded. My next steps
          are to add new features--a dashboard, saving visuals, new visuals..? I
          have complete control of the design choices of BRAINWORKS. I am very
          greatful to be so trusted at Ghamut. I have a lot of choices and I'll
          let you know what happens next here.
        </Text>
        <Text>
          The{' '}
          <Link
            href="https://brainworks.scigami.org/"
            isExternal
            color="pink.100"
          >
            live version
          </Link>{' '}
          of the website is still in beta, but I encourage you to sign up and
          check it out for yourself!
        </Text>
      </VStack>
    </PageWrapper>
  );
};

export default BRAINWORKS;
