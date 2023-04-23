import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Features } from "../Datas/Features";

function Section2() {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        bg="LightGrayishBlue"
        px="4"
        py="14"
      >
        <Heading maxW="50%" fontWeight="regular" color="DarkBlue">
          Why choose Easybank?
        </Heading>
        <Text mt="5" textStyle="text">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </Text>
        <Flex direction="column" mt="10" gap="2">
          {Features &&
            Features.map((feat) => (
              <VStack key={feat.id} spacing={3} py="2">
                <Image
                  src={feat.featureImg}
                  width="3.5rem"
                  h="full"
                  alt="feature image"
                />
                <Heading textStyle="heading" fontSize="md" fontWeight="regular">
                  {feat.heading}
                </Heading>
                <Text textStyle="text" maxW="95%">{feat.caption}</Text>
              </VStack>
            ))}
        </Flex>
      </Flex>
    </>
  );
}

export default Section2;
