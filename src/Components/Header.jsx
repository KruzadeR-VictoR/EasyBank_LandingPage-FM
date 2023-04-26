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
      transition: { type: "spring", duration: 0.5, delay: 0.5 },
    },
  };

  const modalAnimation = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "tween",
        when: "beforeChildren",
        staggerChildren: ".1",
      },
    },
  };
  1;
  const children = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
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
            <Box
              as={motion.button}
              ref={menuRef}
              onClick={onOpen}
              whileTap={{ scale: 0.7 }}
            >
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
            <ModalContent
              as={motion.section}
              maxW="90%"
              mt="5.5rem"
              rounded="md"
              overflow="hidden"
              variants={modalAnimation}
              initial="initial"
              animate="animate"
            >
              {/* <ModalCloseButton /> */}
              <ModalBody bg="White">
                <Flex direction="column" align="center" gap="4" py="5">
                  <Link
                    as={motion.a}
                    fontSize="lg"
                    color="DarkBlue"
                    variants={children}
                  >
                    Home
                  </Link>
                  <Link
                    as={motion.a}
                    fontSize="lg"
                    color="DarkBlue"
                    variants={children}
                  >
                    About
                  </Link>
                  <Link
                    as={motion.a}
                    fontSize="lg"
                    color="DarkBlue"
                    variants={children}
                  >
                    Contact
                  </Link>
                  <Link
                    as={motion.a}
                    fontSize="lg"
                    color="DarkBlue"
                    variants={children}
                  >
                    Blog
                  </Link>
                  <Link
                    as={motion.a}
                    fontSize="lg"
                    color="DarkBlue"
                    variants={children}
                  >
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
                as={motion.a}
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
                whileTap={{
                  scale: 0.8,
                }}
              >
                Home
              </Link>
              <Link
                as={motion.a}
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
                whileTap={{
                  scale: 0.8,
                }}
              >
                About
              </Link>
              <Link
                as={motion.a}
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
                whileTap={{
                  scale: 0.8,
                }}
              >
                Contact
              </Link>
              <Link
                as={motion.a}
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
                whileTap={{
                  scale: 0.8,
                }}
              >
                Blog
              </Link>
              <Link
                as={motion.a}
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
                whileTap={{
                  scale: 0.8,
                }}
              >
                Careers
              </Link>
            </Flex>
            <Box
              as={motion.button}
              bgGradient="linear(to-r,LimeGreen,BrightCyan)"
              color="White"
              rounded="full"
              p="2"
              px="2rem"
              fontSize="sm"
              _hover={{ opacity: ".8" }}
              whileTap={{ scale: 0.9 }}
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
