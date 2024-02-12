import { HStack, Button, useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton, Textarea, VStack, FormControl, FormLabel, DrawerHeader, Input, InputGroup, Box } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons';
import React, { useRef } from 'react'
import { useFormik } from 'formik';
import { FilePond, registerPlugin } from 'react-filepond';


export default function PostsActionComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      contentText: '',
      imgfile: [],
    },
    onSubmit: (values) => {
      console.log('values', values);
    }
  });

  const postDrawerOpen = () => {
    onOpen();
  }

  const handleUploadClick = () => {
    // open 
  };

  return (
    <>
      <HStack spacing={4} justify='end' width="full" paddingStart={5} paddingEnd={5}>
        <Button onClick={postDrawerOpen}>Create Post</Button>
        <Button disabled={true}>Create Story</Button>
      </HStack>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay>
          <DrawerContent>
            <form onSubmit={formik.handleSubmit}>
              <DrawerHeader>Create Post!</DrawerHeader>
              <DrawerBody>
                <FormControl>
                  {/* <FormLabel htmlFor="contentText">Create Post for our!</FormLabel> */}
                  <Textarea
                    value={formik.values.contentText}
                    onChange={(e) => {formik.setFieldValue('contentText', e.target.value)}}
                    id="contentText"
                    name="contentText"
                    placeholder="What's on your mind?"
                    rows={7}
                  />
                </FormControl>
                <Box padding={2} />
                {/* uploadfile */}
                <FilePond
                  files={formik.values.imgfile}
                  onupdatefiles={(fileList) => formik.setFieldValue('imgfile', fileList)}
                  allowMultiple={true}
                  maxFiles={3}
                  name="imgfile"
                  labelIdle='Drop or Upload Image.'
                  credits={false}
                />
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <HStack spacing={4} align="stretch">
                  {/* <Button leftIcon={<AttachmentIcon />} colorScheme="teal" onClick={handleUploadClick}>
                    Upload Picture
                  </Button> */}
                  <Button colorScheme="blue" type="submit">
                    Post
                  </Button>
                </HStack>
              </DrawerFooter>
            </form>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}