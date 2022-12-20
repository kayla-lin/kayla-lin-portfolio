import { ArrowLeftIcon } from '@chakra-ui/icons';
import {
  Container,
  Heading,
  VStack,
  Text,
  Wrap,
  Tag,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TransparentButton from '../../../../common/components/TransparentButton';
import { PROJECTS } from '../../../../common/constants';

const PageWrapper = ({ title, children }) => {
  const [project] = PROJECTS.filter(project => project.heading === title);
  const { heading, subHeading, tags } = project;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container py={50} maxW="5xl">
      <VStack align="flex-start" spacing={5}>
        <Link to="/">
          <TransparentButton leftIcon={<ArrowLeftIcon />}>
            Back to home
          </TransparentButton>
        </Link>
        <Heading>{heading}</Heading>
        <Text>{subHeading}</Text>
        <Wrap>
          {tags.map(tag => (
            <Tag colorScheme="pink" key={tag}>
              {tag}
            </Tag>
          ))}
        </Wrap>
      </VStack>
      <VStack spacing={20} w="100%" align="flex-start" py={50}>
        {children}
      </VStack>
    </Container>
  );
};

export default PageWrapper;
