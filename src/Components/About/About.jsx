import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import {BsArrowDown} from 'react-icons/bs'
  export default function About() {
    return (
      <Stack id='about' mt={20} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex px={[10,20,30,40]} flex={1} align={'center'} justifyContent='space-evenly' direction={['column','column','row']}>
       
          <Image
          
            alt={'Login Image'}
            objectFit={'cover'}
            p={[4,10]}
           m={[4,8,16,10]}
           w={['400px']}
            src={
              'https://user-images.githubusercontent.com/104376252/201934722-77015dbd-f9d0-4858-a66a-afa1768a3bca.png'
            }
          />
   
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                    About
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
              Me
              </Text>{' '}
            </Heading>
            <Text p={4} textAlign={'left'} fontSize={'xl'} color={'gray.500'}>
        
            Self-motivated and a curious learner and creative mind having strong in problem-solving 
            and proficiency in HTML, CSS, Javascript & ReactJS. Seeking a position in a growth-oriented 
            company where I can utilize my understanding of coding and software development to efficiently
             fulfill the requirements of clients and customers.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button as ="a" href="https://drive.google.com/file/d/1Z87dD1mMTjXm4H8AIZK5c1L3C2HVf7U0/view?usp=share_link"
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                target="_blank"
                _hover={{
                  bg: 'blue.500',
              
                }}>
            Resume <BsArrowDown ml={2}/>
              </Button>
            
            </Stack>
          </Stack>
        </Flex>
    
      </Stack>
    );
  }