import { Container, HStack } from '@chakra-ui/react'
import { Flex, Text, Button } from '@chakra-ui/react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { ColorModeButton } from "@/components/ui/color-mode"


const Navbar = () => {

  return (
    <Container maxW={'container.lg'} p={'12'}>

      <Flex
        h={'16px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexDir={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Text
					fontSize={{ base: "xl", sm: "2xl" }}
          fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
          color={'blue.500'}
				>
					<Link to={"/"} >Product Store</Link>
				</Text>

        <HStack
        gap={2}
        alignItems={"center"}
        

        >
					<Link to={"/create"}>
            <Button
              size={"sm"}
              variant={"surface"}
              color={'blue.500'}
            >
                <IoIosAddCircleOutline fontSize={20}/>
            </Button>
          </Link>

          <Link>
          <ColorModeButton width={"40px"}
            size={"sm"}
            variant={"surface"}
            color={'blue.500'}
          />
          </Link>
        </HStack>
        
      </Flex>
    </Container>
  )
}

export default Navbar
