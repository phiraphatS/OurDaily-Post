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
    url: "https://ourdiary-sue-bambam-bucket.s3.ap-southeast-1.amazonaws.com/our-diary-phitchanan-profile.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4MTWIMJJVFXQVIM6%2F20240402%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240402T124523Z&X-Amz-Expires=3600&X-Amz-Signature=689fa675097e0c841bbb794e5698ec9b51f44a91fb26c45a28a45322bb5a9aa6&X-Amz-SignedHeaders=host&x-id=GetObject",
    status: "Offline"
  },
  {
    username: "Sue",
    position: "Boyfriend",
    url: "https://ourdiary-sue-bambam-bucket.s3.ap-southeast-1.amazonaws.com/our-diary-phiraphat-profile.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4MTWIMJJVFXQVIM6%2F20240402%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240402T124523Z&X-Amz-Expires=3600&X-Amz-Signature=160f13bc819329a8014efe4545f1a28eacc598faadbb334bad45b78002ebc455&X-Amz-SignedHeaders=host&x-id=GetObject",
    status: "Online"
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

          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
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