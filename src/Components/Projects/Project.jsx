import React from "react";

import {
  Box,
  Heading,
  Link,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";

const Project = () => {
  const ProjectData = [
    {
      title: "Shine.com",
      link: "https://visionary-strudel-9d2d93.netlify.app/",
      url: "https://github.com/shwetra/-futuristic-boundary-6014",
      description:
        "Shine.com is India's Leading Online Job and Recruitment Portal - Search & Apply for Latest Job Vacancies across Top Companies in India...",
      language:["React"," ","Redux"," ","Chakra UI"],
      image:
        "https://user-images.githubusercontent.com/104376252/202188285-f438306e-e5f4-4fd6-a4f8-a5d313402883.png",
    },
    {
      title: "Meanbuy.com",
      link: "https://keen-lily-143162.netlify.app/",
      url: "https://github.com/shubhrakantighosh/meanbuy",
      description:
        " Meanbuy is a comprehensive platform for you to choose how you shop, whether it is buying instantly, waiting to save or to pick up your order from the store ..",
      language: ["html", " ", "css", " ", "javaScript", " ","React"],
      image:
        "https://user-images.githubusercontent.com/104376252/202191859-ef2f46d1-6d78-4dd0-987d-ed9fdff7f632.png",
    },
    {
      title: "Toggl Track",
      link: "https://toggl-track-by-gas-face-3608.netlify.app/",
      url: "https://github.com/abhijitnr/Toggl.com-Track-Clone",
      description:
        "Time tracking software to boost performance and get paid for every billable minute. An intuitive tool that makes time tracking painless for the entire team...",
      language: ["React", " ", "Redux", " ", ""],
      image:
        "https://user-images.githubusercontent.com/104376252/202195323-40c71a2c-cc71-4cc0-9d82-4103fceb5aac.png",
    },
    {
      title: "Organic-Market",
      link: "https://organicmarket.netlify.app/",
      url: "https://github.com/Naquee/massive-things-7112",
      description:
        "Buy Fruits & Vegetables online from the Online Grocery Expert. Shop Now from bigbasket. Choose from a wide range of options in every category exclusively handpicked for you. Cash on Delivery. Quality You Trust. Types: Fruits & Vegetables, Grocery & Staples...",
      language: ["React", " ", "Redux"," ","MongoDB"," ","Chakra-UI"," ","Material-Ui"],
      image:
        "https://user-images.githubusercontent.com/104376252/202198806-05021051-889c-4a43-bdb4-187e34f418c6.png",
    },
    {
      title: "As-Destination",
      link: "https://asdestination.vercel.app/",
      url: "https://github.com/shwetra/hotel",
      description:
        "At As-Destination, we are passionate about providing unforgettable travel experiences to our customers. Our mission is to help you discover the world in a way that is authentic, immersive, and sustainable.",
      language: ["React", " ", "Redux"," ","MongoDB"," ","Node"," ","Express","Chakra-UI"," ","Material-Ui"],
      image:
        "https://github.com/shwetra/assa/assets/104376252/bdc6975b-4e00-4d46-9648-a5154ae06011",
    },
   
  ];
  return (
    <Box m="auto" mt={40} w="90%" id="projects">
      <Heading color={"blue.500"}>Projects</Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={8}>
        {ProjectData.map((t) => {
          return (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              border="5px solid"
              borderColor={"gray.300"}
              rounded={"xl"}
              mx={8}
              p={2}
            >
              <Image src={t.image} />
              <Text fontSize={"1.3rem"}>{t.title}</Text>
              <Text fontWeight={700}>{t.language}</Text>
              <Text textAlign={"justify"}>{t.description}</Text>

              <Flex justifyContent={"space-between"} gap={[4]}>
                <Button target="_blank" as="a" href={t.url} bg={"blue.300"}>
                  Github
                </Button>
                <Button as="a" href={t.link} target="_blank">
                  Go live
                </Button>
              </Flex>
            </Stack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Project;
