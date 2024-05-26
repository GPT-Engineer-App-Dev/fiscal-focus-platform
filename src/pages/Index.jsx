import { Container, Box, Text, VStack, Grid, GridItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box mb={8}>
        <Text fontSize="3xl" fontWeight="bold">Featured Article</Text>
        <Text>Details about the featured article...</Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
    </Container>
  );
};

export default Index;