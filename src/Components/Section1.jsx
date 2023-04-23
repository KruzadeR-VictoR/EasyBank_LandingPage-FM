import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import bgIntro from "../assets/bg-intro-mobile.svg";
import heroImg from "../assets/image-mockups.png";
import Header from "./Header";

function Section1() {
  return (
    <>
      <Header />
      <Flex direction="column" minH="100vh" bg="White">
        <Box
          bgImage={`url(${bgIntro})`}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="top center"
        >
          <Image
            src={heroImg}
            alt="hero banner"
            w="90%"
            h="full"
            zIndex="10"
            m="auto"
          />
        </Box>
        <VStack spacing={5} textAlign="center" p="4" pb="4rem">
          <Heading fontSize="4xl" fontWeight="regular" color="DarkBlue" px="2">
            Next generation digital banking
          </Heading>
          <Text color="GrayishBlue">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Text>
          <Box
            as="button"
            bgGradient="linear(to-r,LimeGreen,BrightCyan)"
            color="White"
            rounded="full"
            p="2"
            px="2rem"
            fontSize="md"
            // overflow="hidden"
          >
            Request Invite
          </Box>
        </VStack>
      </Flex>
    </>
  );
}

export default Section1;
