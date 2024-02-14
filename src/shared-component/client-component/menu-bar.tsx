'use client'
import React, { useTransition } from "react";
import { Box, Flex, Text, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Avatar, Heading, AvatarBadge, Stack, AvatarGroup } from "@chakra-ui/react";
import { useRouter } from "next-nprogress-bar"
import { HamburgerIcon } from "@chakra-ui/icons";
import { useScrollYPosition } from "react-use-scroll-position";

const user = [
  {
    username: "Bam",
    position: "Girlfriend",
    url: "https://cloud-object-storage-cos-standard-tni.s3.jp-tok.cloud-object-storage.appdomain.cloud/received_226124396716749.jpeg",
    status: "Online"
  },
  {
    username: "Sue",
    position: "Boyfriend",
    url: "https://cloud-object-storage-cos-standard-tni.s3.jp-tok.cloud-object-storage.appdomain.cloud/P1012767.JPG",
    status: "Offline"
  }
];

const menuList = [
  {
    name: "First Page",
    url: "/"
  },
  {
    name: "Congratulation",
    url: "/congratulation"
  },
  {
    name: "Feeds",
    url: "/feeds"
  }
];

export default function ResponsiveMenuBar({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const scrollY = useScrollYPosition();
  const Link = ({ children, ...props }: any) => {
    return (
      <Button
        className="menu-link"
        variant="link"
        onClick={() => {
          onClose();
          router.push(props.href);
        }}
      >
        {children}
      </Button>
    );
  }

  const MenuItems = ({ children, href }: any) => (
    <Link mt={{ base: 4, md: 0 }} mr={6} display="block" href={href}>
      {children}
    </Link>
  );

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
              {menuList.map((menu, i) => (
                <MenuItems key={i} href={menu.url}>{menu.name}</MenuItems>
              ))}
            </Box>
          </Flex>
          <AvatarGroup size='sm' max={2}>
            {user.map((u, i) => (
              <Avatar key={i} name={u.username} src={u.url}>
                <AvatarBadge boxSize='1em' bg={u.status === "Online" ? "green.500" : "#999"} />
              </Avatar>
            ))}
          </AvatarGroup>

          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <VStack spacing={4} align="start" pb={5}>
                    {menuList.map((menu, i) => (
                      <MenuItems key={i} href={menu.url}>{menu.name}</MenuItems>
                    ))}
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