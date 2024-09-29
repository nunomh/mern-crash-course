import React from 'react';
import { useEffect } from 'react';
import { Container, VStack, Text, Link, SimpleGrid } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { useProductStore } from '../store/products';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => { fetchProducts() }, [fetchProducts]);
  console.log("products: ", products);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.600)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={"full"}
        >

        </SimpleGrid>

        <Text fontSize={"xl"} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
          No Products Found - {" "}
          <Link as={ReactRouterLink} to={"/create"}>
            <Text as='span' color="blue.500" _hover={{ textDecoration: "underline" }}>
              Create a Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage