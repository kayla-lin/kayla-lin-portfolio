import { ArrowRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  Tag,
  Text,
  Tooltip,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Project = props => {
  const {
    heading,
    subHeading,
    deployment,
    type,
    route,
    tags,
    img,
    imgAlt,
    image,
    isInactive,
  } = props.project;

  console.log(props.project);

  return (
    <Container maxW="4xl">
      <VStack w="100%" align="space-between">
        <HStack
          h={400}
          justify="space-between"
          flexDir={{ base: 'column', md: 'row' }}
          my={{ base: 20, md: 0 }}
          gap={5}
        >
          <Skeleton isLoaded={img}>
            <Image
              w={375}
              h={250}
              borderRadius="md"
              src={image}
              alt={imgAlt}
              objectFit="cover"
            />
          </Skeleton>
          <VStack
            h="100%"
            justify="center"
            align="flex-start"
            textAlign="left"
            w={{ base: '100%', md: '50%' }}
          >
            <Text>{type}</Text>
            <Heading fontWeight={700} fontSize="18px">
              {heading}
            </Heading>
            <Text>{subHeading}</Text>
            <Wrap>
              {tags.map(tag => (
                <Tag key={tag} colorScheme="pink">
                  {tag}
                </Tag>
              ))}
            </Wrap>
            <HStack justify="space-between" w="100%" pt={5}>
              {deployment ? (
                <>
                  <Tooltip isDisabled={!isInactive} label={isInactive}>
                    <Link href={deployment} isExternal>
                      <Button
                        variant="ghost"
                        rightIcon={<ExternalLinkIcon />}
                        px={0}
                        _hover={{ bg: 'transparent', opacity: '80%' }}
                        _active={{ bg: 'transparent' }}
                        disabled={isInactive}
                      >
                        View
                      </Button>
                    </Link>
                  </Tooltip>
                  <Link as={RouterLink} to={`projects/${route}`}>
                    <Button
                      variant="ghost"
                      px={0}
                      rightIcon={<ArrowRightIcon />}
                      _hover={{ bg: 'transparent', opacity: '80%' }}
                      _active={{ bg: 'transparent' }}
                    >
                      Read more
                    </Button>
                  </Link>
                </>
              ) : (
                <Text>Coming soon</Text>
              )}
            </HStack>
          </VStack>
        </HStack>
        <Divider />
      </VStack>
    </Container>
  );
};

export default Project;
