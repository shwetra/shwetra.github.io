import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Heading } from "@chakra-ui/react";
const Github = () => {
  return (
    <Box mt={"5rem"}>
      <Heading color={"blue.500"}>Github-Stats</Heading>
      <Box px={["2%", "4%", "8%", "16%", "24%"]} py={8}>
        <GitHubCalendar
          username="shwetra"
          blockSize={10}
          blockMargin={5}
          color="teal"
          fontSize={16}
          m={40}
          w="70%"
          // mx={[0,4,8,16,20]}
        />
      </Box>
    </Box>
  );
};

export default Github;
