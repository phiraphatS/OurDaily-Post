import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
      heading: 'var(--font-monter)',
      body: 'var(--font-montserrat)',
      weigth: {
        100: "Montserrat-Light",
        200: "Montserrat-Light",
        300: "Montserrat-Light",
        400: "Montserrat-Regular",
        500: "Montserrat-Medium",
        600: "Montserrat-Medium",
        700: "Montserrat-Bold",
        800: "Montserrat-Bold",
        900: "Montserrat-Bold",
      }
    },
    colors: {
      base: {
        100: "#F6F5F2",
        200: "F0EBE3",
        300: "#F3D0D7",
        400: "#FFEFEF",
      }
    },
    components: {
      Button: {
        variants: {
          "border-solid-pink" : {
            border: "1px solid #F3D0D7",
            bg: "#fff",
            color: "#000",
            _hover: {
              bg: "#FFEFEF",
              color: "black",
            }
          }
        }
      }
    },
    styles: {
      global: {
        body: {
          bg: "#FFEFEF",
          color: "black",
        }
      }
    }
});