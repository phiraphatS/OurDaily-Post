'use client'
import React, { useEffect, useState } from "react";
import { Box, Flex, Button, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Avatar, AvatarBadge, AvatarGroup, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next-nprogress-bar"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useScrollYPosition } from "react-use-scroll-position";
import { FaHome, FaGift, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

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
    url: "/",
    icon: FaHome
  },
  {
    name: "Congratulation",
    url: "/congratulation",
    icon: FaGift
  },
  {
    name: "Feeds",
    url: "/feeds",
    icon: FaNewspaper
  },
  {
    name: "Logout",
    url: "/api/auth/signout",
    icon: FaSignOutAlt
  }
];

export default function ResponsiveMenuBar({ children }: { children: React.ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: session } = useSession();
  const router = useRouter();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShowNavbar(false);
      } else { // if scroll up show the navbar
        setShowNavbar(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  const Link = ({ children, ...props }: any) => {
    const handleClick = () => {
      onClose();
      if (props.href === "/api/auth/signout") {
        signOut({ callbackUrl: "/authen" });
      } else {
        router.push(props.href);
      }
    };

    return (
      <Button
        className="menu-link"
        variant="ghost"
        onClick={handleClick}
        leftIcon={<Icon as={props.icon} />}
        justifyContent="flex-start"
        width="full"
      >
        {children}
      </Button>
    );
  };

  const MenuItems = ({ children, href, icon }: any) => (
    <Link mt={{ base: 4, md: 0 }} mr={6} display="block" href={href} icon={icon}>
      {children}
    </Link>
  );

  return (
    <>
      <Box
        position="sticky"
        top="0"
        bg={bgColor}
        boxShadow="md"
        transition="transform 0.3s"
        transform={showNavbar ? "translateY(0)" : "translateY(-100%)"}
        zIndex={100}
        width="full"
      >
        <Flex wrap="wrap" align="center" justify="space-between" py={4} px={6}>
          <Flex align="center">
            <Box display={{ base: "block", md: "none" }} onClick={onOpen}>
              <Icon as={HamburgerIcon} fontSize={24} />
            </Box>
            <Box display={{ base: "none", md: "flex" }}>
              {menuList.map((menu, i) => (
                <MenuItems key={i} href={menu.url} icon={menu.icon}>
                  {menu.name}
                </MenuItems>
              ))}
            </Box>
          </Flex>
          {session ? (
            <AvatarGroup size='sm' max={2}>
              {user.map((u, i) => (
                <Avatar key={i} name={u.username} src={u.url}>
                  <AvatarBadge boxSize='1em' bg={u.status === "Online" ? "green.500" : "gray.500"} />
                </Avatar>
              ))}
            </AvatarGroup>
          ) : (
            <Button onClick={() => router.push("/api/auth/signin")}>Sign In</Button>
          )}
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch" py={5}>
                {menuList.map((menu, i) => (
                  <MenuItems key={i} href={menu.url} icon={menu.icon}>{menu.name}</MenuItems>
                ))}
              </VStack>
              <Box mt={8}>
                <Text fontWeight="bold" mb={4}>Online Users</Text>
                {user.map((u, i) => (
                  <Flex key={i} align="center" mb={3}>
                    <Avatar size="sm" name={u.username} src={u.url} mr={3}>
                      <AvatarBadge boxSize='1em' bg={u.status === "Online" ? "green.500" : "gray.500"} />
                    </Avatar>
                    <Box>
                      <Text fontWeight="medium">{u.username}</Text>
                      <Text fontSize="sm" color="gray.500">{u.position}</Text>
                    </Box>
                  </Flex>
                ))}
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      <Box>
        {children}
      </Box>
    </>
  );
};