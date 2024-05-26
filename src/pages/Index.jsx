import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={4}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Articles Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="Article Image" />
              <Heading as="h2" size="md" mt={4}>Article Title 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="Article Image" />
              <Heading as="h2" size="md" mt={4}>Article Title 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={8} align="stretch">
            <Box bg="gray.100" p={4}>
              <Heading as="h3" size="sm">Advertisement</Heading>
              <Image src="https://via.placeholder.com/300x250" alt="Ad Image" mt={4} />
            </Box>
            <Box bg="gray.100" p={4}>
              <Heading as="h3" size="sm">Follow Us</Heading>
              <HStack spacing={4} mt={4}>
                <Link href="#"><FaTwitter size="24" /></Link>
                <Link href="#"><FaFacebook size="24" /></Link>
                <Link href="#"><FaLinkedin size="24" /></Link>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;