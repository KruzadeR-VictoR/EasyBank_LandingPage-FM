import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Home from "./Home";

function App() {
  const theme = extendTheme({
    colors: {
      heading: "red",
      DarkBlue: "hsl(233, 26%, 24%)",
      LimeGreen: "hsl(136, 65%, 51%)",
      BrightCyan: "hsl(192, 70%, 51%)",
      GrayishBlue: "hsl(233, 8%, 62%)",
      LightGrayishBlue: "hsl(220, 16%, 96%)",
      VeryLightGray: "hsl(0, 0%, 98%)",
      White: "hsl(0, 0%, 100%)",
    },
    fontWeights: {
      light: "300",
      regular: "400",
      bold: "700",
    },
    textStyles: {
      heading: {
        color: "DarkBlue",
        fontWeight: "light",
      },
      text: {
        color: "GrayishBlue",
        fontSize: "sm",
        textAlign: "center",
      },
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </>
  );
}

export default App;
