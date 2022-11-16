import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaMoon, FaSun, FaGithub,FaLinkedin } from "react-icons/fa";
import NavLink from "./NavLink";

const links = [
  { name: "About", id: "about" },
  { name: "Tech ", id: "tech" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Box position={'fixed'} w={'100%'} zIndex={999} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Shwet Rai</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
            
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.id}
                name={link.name}
                fontSize={15}
                onClick={() => onClose()}
              />

            ))}
             <Button as ="a" href="https://drive.google.com/file/d/1Z87dD1mMTjXm4H8AIZK5c1L3C2HVf7U0/view?usp=share_link"
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                target="_blank"
                _hover={{
                  bg: 'blue.500',
                }}>Resume</Button>
                        </HStack>
          </HStack>
          <Flex alignItems={'center'} gap={2}>
          
            <Menu>
           
            <IconButton
            variant="outline"
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
            aria-label="toggle-dark-mode"
          />

              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://user-images.githubusercontent.com/104376252/201934722-77015dbd-f9d0-4858-a66a-afa1768a3bca.png'
                  }
                />
              </MenuButton>
            
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} 
        
          >
            <Stack as={'nav'} spacing={4}  >
            {links.map((link, i) => (
              <NavLink
              
                key={i}
                to={link.id}
                name={link.name}
                w="xm"
                onClick={() => onClose() }
              />
            ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}