import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box w="100%" p={4} bg="gray.100">
      <VStack align="start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold">Trending Topics</Text>
        <Text>Topic 1</Text>
        <Text>Topic 2</Text>
        <Text>Topic 3</Text>
        <Text fontSize="xl" fontWeight="bold">Latest News</Text>
        <Text>News 1</Text>
        <Text>News 2</Text>
        <Text>News 3</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;