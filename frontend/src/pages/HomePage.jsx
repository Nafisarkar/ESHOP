
import { Container, VStack, Text, Center } from '@chakra-ui/react';
import { SimpleGrid } from "@chakra-ui/react"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '@/store/product';
import ProductCard from '@/components/ui/ProductCard';


const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {

    fetchProducts();

  }, [fetchProducts]);

  console.log(products);

  return (
    <>
      <Container maxW={'container.lg'} p={'8'} >
        <VStack spacing={'8'}>

          {products.length > 0 && (
            <Center>
              <Text fontSize={'2xl'} m={'1'} >Current Products</Text>
            </Center>
          )}

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} w={'full'} gap={'4'}>

            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}

          </SimpleGrid>
          {products.length === 0 && (
            <Center>
              <Text fontSize={'2xl'} m={'1'} >No product found .
                {" "} <Link to={'/create'}> <Text as={'span'} style={{ fontWeight: 'bold' }} color={'blue.500'} _hover={{ textDecoration: 'underline' }}>Create</Text></Link> a product
              </Text>
            </Center>
          )}
        </VStack>

      <Center
        position={'fixed'}
        bottom={'0'}
        left={'0'}
        right={'0'}
        py={'4'}
      >
        <Text fontSize={'xl'}>
          Made By{" "}
          <Link
            variant="underline"
            href="https://github.com/Nafisarkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text as={'span'} style={{ fontWeight: 'bold' }} color={'blue.500'}>
              Shaon An Nafi
            </Text>
          </Link>{" "}
        </Text>
      </Center>
        
      </Container>
    </>
  )
}

export default HomePage
