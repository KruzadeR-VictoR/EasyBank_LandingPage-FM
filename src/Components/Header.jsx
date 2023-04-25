import {
  Box,
  Flex,
  Hide,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import closeBtn from "../assets/icon-close.svg";
import { motion } from "framer-motion";

function Header() {
  const menuRef = useRef();

  // Before psuedo styles
  const beforeStyle = {
    content: '""',
    position: "absolute",
    bottom: "-1rem",
    width: "0%",
    height: "3px",
    // borderRadius: "10px",
    background: "LimeGreen",
    transition: "all .3s ease-in",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const Animation = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: { type: "spring", duration: 0.5,delay:.5},
    },
  };

  return (
    <Box
      as={motion.div}
      variants={Animation}
      initial="initial"
      animate="animate"
      position="absolute"
      top="0"
      w="full"
      bg="White"
    >
      <Box
        as="header"
        // bg="teal"
        bg="White"
        p="5"
        // borderBottom="1px solid teal"
        // position={["absolute","static"]}
        // position="absolute"
        // top="0"
        w="full"
        maxW="80rem"
        m="auto"
      >
        <Flex as="nav" justify="space-between" align="center">
          <Box>
            <Image src={logo} alt="Brand logo" />
          </Box>
          {/* Mobile nav menu  */}
          <Hide above="md">
            <Box as="button" ref={menuRef} onClick={onOpen}>
              {isOpen ? (
                <Image src={closeBtn} alt="Burger Menu button" />
              ) : (
                <Image src={hamburger} alt="Burger Menu button" />
              )}
            </Box>
          </Hide>
          <Modal
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={menuRef}
          >
            <ModalOverlay />
            <ModalContent maxW="90%" mt="5.5rem" rounded="md" overflow="hidden">
              {/* <ModalCloseButton /> */}
              <ModalBody bg="White">
                <Flex direction="column" align="center" gap="4" py="5">
                  <Link fontSize="lg" color="DarkBlue">
                    Home
                  </Link>
                  <Link fontSize="lg" color="DarkBlue">
                    About
                  </Link>
                  <Link fontSize="lg" color="DarkBlue">
                    Contact
                  </Link>
                  <Link fontSize="lg" color="DarkBlue">
                    Blog
                  </Link>
                  <Link fontSize="lg" color="DarkBlue">
                    Careers
                  </Link>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
          {/* desktop nav menu  */}
          <Hide below="md">
            <Flex direction="row" align="center" gap={["4", 5, 8]}>
              <Link
                fontSize={["lg", "md"]}
                color={["DarkBlue", "GrayishBlue"]}
                position="relative"
                _before={beforeStyle}
                _hover={{
                  _before: {
                    width: "100%",
                  },
                  color: "DarkBlue",
                }}
              >
                Home
              </Link>
              <Link
                fontSize={["lg", "md"]}
                color={["DarkBlue", "GrayishBlue"]}
                position="relative"
                _before={beforeStyle}
                _hover={{
                  _before: {
                    width: "100%",
                  },
                  color: "DarkBlue",
                }}
              >
                About
              </Link>
              <Link
                fontSize={["lg", "md"]}
                color={["DarkBlue", "GrayishBlue"]}
                position="relative"
                _before={beforeStyle}
                _hover={{
                  _before: {
                    width: "100%",
                  },
                  color: "DarkBlue",
                }}
              >
                Contact
              </Link>
              <Link
                fontSize={["lg", "md"]}
                color={["DarkBlue", "GrayishBlue"]}
                position="relative"
                _before={beforeStyle}
                _hover={{
                  _before: {
                    width: "100%",
                  },
                  color: "DarkBlue",
                }}
              >
                Blog
              </Link>
              <Link
                fontSize={["lg", "md"]}
                color={["DarkBlue", "GrayishBlue"]}
                position="relative"
                _before={beforeStyle}
                _hover={{
                  _before: {
                    width: "100%",
                  },
                  color: "DarkBlue",
                }}
              >
                Careers
              </Link>
            </Flex>
            <Box
              as="button"
              bgGradient="linear(to-r,LimeGreen,BrightCyan)"
              color="White"
              rounded="full"
              p="2"
              px="2rem"
              fontSize="sm"
              _hover={{ opacity: ".8" }}
              // overflow="hidden"
            >
              Request Invite
            </Box>
          </Hide>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
