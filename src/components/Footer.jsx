import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex justify="space-between" align="center" px={8}>
        <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
        <Flex>
          <Link href="/contact" mx={2}>Contact</Link>
          <Link href="/privacy" mx={2}>Privacy Policy</Link>
          <Link href="/terms" mx={2}>Terms of Service</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;