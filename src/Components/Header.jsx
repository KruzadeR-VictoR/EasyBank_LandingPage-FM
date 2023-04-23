import {
  Box,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import closeBtn from "../assets/icon-close.svg";

function Header() {
  const menuRef = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      bg="White"
      p="5"
      // borderBottom="1px solid teal"
      position="absolute"
      top="0"
      w="full"
    >
      <Flex as="nav" justify="space-between" align="center">
        <Box>
          <Image src={logo} alt="Brand logo" />
        </Box>
        <Box as="button" ref={menuRef} onClick={onOpen}>
          {isOpen ? (
            <Image src={closeBtn} alt="Burger Menu button" />
          ) : (
            <Image src={hamburger} alt="Burger Menu button" />
          )}
        </Box>
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
      </Flex>
    </Box>
  );
}

export default Header;
