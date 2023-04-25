import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Articles } from "../Datas/Articles";
import { motion } from "framer-motion";

function Section3() {
  const animation = {
    initial: { opacity: 0, y: -100 },
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
      <Box bg="VeryLightGray">
        <Box p="5" py="16" maxW={["full", "70rem"]} m="auto">
          <Heading
            textAlign={["center", "center", "start"]}
            // fontSize="3xl"
            fontWeight="regular"
            color="DarkBlue"
            mb={["6", 10]}
          >
            Latest Articles
          </Heading>
          <Flex
            as={motion.div}
            variants={animation}
            initial="initial"
            whileInView="animate"
            direction={["column", "row"]}
            justify="center"
            align={["center", "stretch"]}
            wrap={["nowrap", "wrap", "nowrap"]}
            gap="6"
          >
            {Articles &&
              Articles.map((article) => (
                <Card
                  as={motion.div}
                  variants={children}
                  rounded="md"
                  overflow="hidden"
                  boxShadow="none"
                  maxW="20rem"
                >
                  <Image
                    src={article.articleImg}
                    w="full"
                    h="full"
                    alt="article image"
                  />
                  <CardBody bg="White">
                    <Text fontSize="xs" color="GrayishBlue">
                      By {article.author}
                    </Text>
                    <Heading
                      textStyle="heading"
                      fontSize="lg"
                      fontWeight="regular"
                      color="DarkBlue"
                      my="1"
                    >
                      {article.heading}
                    </Heading>
                    <Text fontSize="sm" color="GrayishBlue" pb="2">
                      {article.caption}
                    </Text>
                  </CardBody>
                </Card>
              ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Section3;
