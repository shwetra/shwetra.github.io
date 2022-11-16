import {
    Stack,
    Flex,
    Button,
    Text,
    Code,
    VStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import {FiGithub} from 'react-icons/fi'
  import {FaLinkedinIn} from 'react-icons/fa'

  export default function Banner() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'center'} spacing={6}>
            <Text
            
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '4xl', md: '6xl' })}>
            Hello,
            
            I am  Shwet Rai
              
            </Text>
            <Code
            bgColor={'black'}
            color={'white'}
            fontSize={'2rem'}
            >
             <a href="#"><img src="https://readme-typing-svg.herokuapp.com?color=FFF&center=true&lines=Full+Stack+Web+Developer" ></img></a>
            </Code>
            <Stack direction={'row'}>
              <IconButton
              as='a'
              href='https://github.com/shwetra'
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                target='_blank'
                _hover={{ bg: 'blue.500' }} icon={<FiGithub/>}/>
              <IconButton
              as='a'
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                href='https://www.linkedin.com/in/shwet-rai-16238a232/'
                target='_blank'
                _hover={{ bg: 'whiteAlpha.500' }} icon={<FaLinkedinIn/>}/>
               
            
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }