import { HStack, Button, useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton, Textarea, VStack, FormControl, FormLabel, DrawerHeader, Input, InputGroup, Box } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons';
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik';
import { FilePond, registerPlugin } from 'react-filepond';
import IBMServices from '@/_helpers/ibm-cloud';
import { postService } from '@/_services/post-service';
import * as yup from 'yup';
import PostDrawerComponent from './post-drawer';

const IMB = new IBMServices();

export default function PostsActionComponent(props: { refresh: () => void }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const postDrawerOpen = () => {
    onOpen();
  }

  return (
    <>
      <HStack spacing={4} justify='end' width="full" paddingStart={5} paddingEnd={5}>
        <Button onClick={postDrawerOpen}>Create Post</Button>
        <Button disabled={true}>Create Story</Button>
      </HStack>

      <PostDrawerComponent isOpen={isOpen} refresh={props.refresh} onClose={onClose} />
    </>
  )
}