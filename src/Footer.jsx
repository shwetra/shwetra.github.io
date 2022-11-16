import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    IconButton,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
  

  
  export default function Footer() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>©chhavi srivastav</Text>
          <Stack direction={'row'} spacing={6}>
            {/* <IconButton  label={'Twitter'} href={'https://github.com/chhavi48'}>
              <FaTwitter /> */}
            {/* </IconButton> */}
            <IconButton as="a" target='_blank' label={'YouTube'} href={'https://www.youtube.com/channel/UCO6UBy7IzICwWcZES9yvlJg'}>
              <FaYoutube />
            </IconButton>
            <IconButton label={'Instagram'} as="a" target='_blank'  href={'https://www.instagram.com/chhavi_srivastvav/'}>
              <FaInstagram />
            </IconButton>
          </Stack>
        </Container>
      </Box>
    );
  }