'use client'
import React, { useTransition } from "react";
import { Box, Link, Flex, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useScrollYPosition } from "react-use-scroll-position";

const MenuItems = ({ children }: any) => (
  <Link mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Link>
);

export default function ResponsiveMenuBar({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollY = useScrollYPosition();

  return (
    <>
      <Box
        position={"fixed"} bg={scrollY > 0 ? "white" : "transparent"}
        boxShadow={scrollY > 0 ? "md" : "none"}
        transition={`
          box-shadow 0.3s ease, 
          background-color 0.3s ease`
        }
        zIndex={100}
        width="full"
      >
        <Flex wrap="wrap" align="center" justify="space-between" paddingTop={3} paddingBottom={3} paddingLeft={6} paddingRight={6}>
          <Flex align="center">
            <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
              <HamburgerIcon fontSize={24} />
            </Box>
            <Box display={{ base: "none", md: "flex" }}>
              <MenuItems>Home</MenuItems>
              <MenuItems>About</MenuItems>
              <MenuItems>Contact</MenuItems>
            </Box>
          </Flex>
          <Button bg="transparent" border="1px">
            Login
          </Button>

          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <VStack spacing={4} align="start" pb={5}>
                    <MenuItems><pre>Home</pre></MenuItems>
                    <MenuItems><pre>About</pre></MenuItems>
                    <MenuItems><pre>Contact</pre></MenuItems>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Flex>
      </Box>
      <Box>
        {children}
        {/* footer */}
      </Box>
    </>
  );
};