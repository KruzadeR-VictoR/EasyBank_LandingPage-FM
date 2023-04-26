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
import bgIntroMobile from "../assets/bg-intro-mobile.svg";
import bgIntroDesktop from "../assets/bg-intro-desktop.svg";
import bgIntro from "../assets/bg-intro-mobile.svg";
import heroImg from "../assets/image-mockups.png";
import Header from "./Header";
import { motion } from "framer-motion";

function Section1() {
  const animation = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        // duration: 1,
        // delay: 1,
      },
    },
  };
  const children = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.5 },
    },
  };
  return (
    <>
      <Header />
      <Flex
        direction={["column", "column", "row-reverse"]}
        maxH="100vh"
        // bg="White"
        // bgImage={[
        //   `none`,
        //   `url(${bgIntroMobile})`,
        //   `url(${bgIntroDesktop})`,
        // ]}
        // bgRepeat="no-repeat"
        // bgSize="100%"
        // bgPosition={["right center", "top right"]}
      >
        <Box
          bgImage={[
            `url(${bgIntroMobile})`,
            `url(${bgIntroMobile})`,
            `url(${bgIntroDesktop})`,
          ]}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition={["top center", "-4rem top"]}
          // flexBasis="50%"
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
        <VStack
          justify="center"
          flex="1"
          p="4"
          pb="4rem"
          // bg="teal"
          flexBasis="50%"
        >
          <VStack
            as={motion.div}
            spacing={5}
            textAlign={["center", "center", "left"]}
            align={["center", "center", "start"]}
            justify="center"
            maxW={["auto", "35rem", "25rem"]}
            variants={animation}
            initial="initial"
            // animate="animate"
            whileInView="animate"
            viewport={{ once: false, amount: 0.8 }}
          >
            <Heading
              as={motion.h2}
              fontSize={["4xl", "5xl"]}
              fontWeight="regular"
              color="DarkBlue"
              px={["2", 0]}
              variants={children}
            >
              Next generation digital banking
            </Heading>
            <Text as={motion.p} color="GrayishBlue" variants={children}>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </Text>
            <Box
              as={motion.button}
              bgGradient="linear(to-r,LimeGreen,BrightCyan)"
              color="White"
              rounded="full"
              p="2"
              px="2rem"
              fontSize="md"
              // _hover={{ opacity: ".8" }}
              // overflow="hidden"
              variants={children}
              whileHover={{ opacity: 0.7 }}
              whileTap={{ scale: 0.9 }}
            >
              Request Invite
            </Box>
          </VStack>
        </VStack>
      </Flex>
    </>
  );
}

export default Section1;
