import { Container, HStack } from '@chakra-ui/react'
import { Flex, Text, Button } from '@chakra-ui/react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { ColorModeButton } from "@/components/ui/color-mode"
import { FaGithub } from "react-icons/fa";

const Navbar = () => {

  return (
    <Container maxW={'container.lg'} p={'10'}  animation={{
      base: "slideInLeft 0.5s ease-in-out forwards",
      sm: "slideInLeft 0.5s ease-in-out forwards"
    }}>

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
					fontSize={{ base: "xl", sm: "3xl" }}
          fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
          color={'blue.500'}
				>
					<Link to={"/"}><Text as="i">🌸SAKURA SHOES</Text></Link>
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
          
            <Button
              display={{ base: 'flex', sm: 'none', md: 'flex' }}
              size={"sm"}
              variant={"surface"}
              color={'blue.500'}
              onClick={() => window.open("https://github.com/Nafisarkar/ESHOP")}
              
            >
              
                <FaGithub />
            </Button>
          
          
        </HStack>
        
      </Flex>
    </Container>
  )
}

export default Navbar

