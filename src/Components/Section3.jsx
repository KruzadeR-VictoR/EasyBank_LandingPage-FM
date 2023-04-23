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

function Section3() {
  return (
    <>
      <Box p="5" py="16" bg="VeryLightGray">
        <Heading
          textAlign="center"
          // fontSize="3xl"
          fontWeight="regular"
          color="DarkBlue"
          mb="6"
        >
          Latest Articles
        </Heading>
        <Flex direction="column" gap="6">
          {Articles &&
            Articles.map((article) => (
              <Card rounded="md" overflow="hidden" boxShadow="none">
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
    </>
  );
}

export default Section3;
