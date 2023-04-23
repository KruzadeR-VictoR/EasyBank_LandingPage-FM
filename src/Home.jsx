// eslint-disable-next-line no-unused-vars
import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Footer from "./Components/Footer";

function Home() {
  return (
    <>
      <Box as="main" bg="White" w="full" minH="100vh">
        {/* <Header /> */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </Box>
    </>
  );
}

export default Home;
