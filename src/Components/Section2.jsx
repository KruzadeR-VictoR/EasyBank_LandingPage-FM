import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Features } from "../Datas/Features";
import { motion } from "framer-motion";

function Section2() {
  const animation = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        // duration: 1,
        // delay: 1,
      },
    },
  };

  const children = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 0.5 },
    },
  };

  return (
    <>
      <Box bg="LightGrayishBlue">
        <Flex
          direction="column"
          align={["center", "center", "start"]}
          bg="LightGrayishBlue"
          px="4"
          py="14"
          maxW={["full", "full", "70rem"]}
          m="auto"
        >
          <Heading
            maxW="50%"
            textAlign="center"
            fontWeight="regular"
            color="DarkBlue"
          >
            Why choose Easybank?
          </Heading>
          <Text mt="5" textStyle="text" maxW={["30rem", "full"]}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </Text>
          <Flex
            as={motion.div}
            direction={["column", "row"]}
            justify="center"
            wrap={["nowrap", "wrap", "nowrap"]}
            mt="10"
            gap={["2", 5]}
            variants={animation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0 }}
          >
            {Features &&
              Features.map((feat) => (
                <VStack
                  as={motion.div}
                  key={feat.id}
                  spacing={3}
                  align={["center", "center", "start"]}
                  py="2"
                  variants={children}
                >
                  <Image
                    src={feat.featureImg}
                    width="3.5rem"
                    h="full"
                    alt="feature image"
                  />
                  <Heading
                    w="max"
                    whiteSpace="nowrap"
                    textStyle="heading"
                    fontSize="md"
                    fontWeight="regular"
                  >
                    {feat.heading}
                  </Heading>
                  <Text
                    textStyle="text"
                    textAlign={["center", "center", "start"]}
                    maxW={["auto", "20rem", "95%"]}
                  >
                    {feat.caption}
                  </Text>
                </VStack>
              ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Section2;
