import React from "react";
import {
  SiChakraui,
  SiFirebase,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNodedotjs,
  SiCss3,
  SiRedux,
  SiLinux,
  SiNpm,
} from "react-icons/si";
import {
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { Box ,Heading,Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import "./skill.css"
const Skills = () => {
  const technologies = [
    {
      name: "HTML",
      link: "https://html.com/html5/",
      icon: <FaHtml5 />,
      color: "red.600",
    },
    {
      name: "CSS",
      link: "https://www.w3.org/TR/CSS/#css",
      icon: <FaCss3Alt />,
      color: "green.400",
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      icon: <FaBootstrap />,
      color: "purple.400",
    },
    {
      name: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: <SiJavascript />,
      color: "yellow.400",
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      icon: <FaReact />,
      color: "blue.400",
    },
    {
      name: "Redux",
      link: "https://nodejs.org/en/",
      icon: <SiRedux/>,
      color: "red.500",
    },

  
    {
      name: "Chakra UI",
      link: "https://chakra-ui.com/",
      icon: <SiChakraui />,
      color: "teal.400",
    },
    {
      name: "Material UI",
      link: "https://mui.com/",
      icon: <SiMaterialui />,
      color: "blue.600",
    },
    {
      name: "Git",
      link: "https://git-scm.com/",
      icon: <FaGitAlt />,
      color: "red.500",
    },
   
    {
      name: "Mongodb",
      link: "https://www.mongodb.com/",
      icon: <SiMongodb />,
      color: "green.600",
    },
    {
      name: "ExpressJs",
      link: "https://www.oracle.com/",
      icon: <SiExpress />,
      color: "red.500",
    },
    {
      name: "NodeJs",
      link: "https://nodejs.org/en/",
      icon: <SiNodedotjs />,
      color: "red.500",
    },
    {
      name: "NPM",
      link: "https://www.npmjs.com/~chhavisrivastva",
      icon: <SiNpm />,
      color: "red.500",
    },
  

  ];
  return (
    <Box mt={20} mx={[4,8,16,24]} id='tech'>
      <Heading color={'blue.500'}>Skills</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={8}
      className="anim">
        {technologies.map((t) =>{
          return (
          <Link href={t.link}  className="anim"
          >
            <Stack justifyContent={'center'} alignItems={'center'} border="1px solid" borderColor={"gray.300"} rounded={"xl"} mx={8} p={2
            }>
              <Box fontSize={"3xl"} color={t.color}>{t.icon}</Box>
              <Text fontSize={"md"}>{t.name}</Text>
            </Stack>
          </Link>
          )
       })}
        
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
