
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
      <Container maxW={'container.lg'}  >
        <VStack spacing={'1'} pb={'8'}>

          {products.length > 0 && (
            <Center>
              <Text fontSize={'2xl'} m={'1'} ></Text>
            </Center>
          )}

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} w={'full'} gap={'8'} m={'2'} >

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
        
      >
        <Text fontSize={'smaller'} opacity={0.4} _hover={{ opacity: 1, cursor: 'pointer' }} onClick={
          () => {
            window.open('https://github.com/Nafisarkar', '_blank');
          }
        }>
          Made By{" "}
            <Text as={'span'} style={{ fontWeight: 'bold' }} color={'blue.500'} >
              Shaon An Nafi
            </Text>
          
        </Text>
      </Center>
      </Container>
    </>
  )
}

export default HomePage
