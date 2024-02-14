import { HStack, Button, useDisclosure, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton, Textarea, VStack, FormControl, FormLabel, DrawerHeader, Input, InputGroup, Box } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons';
import React, { useRef, useState } from 'react'
import { useFormik } from 'formik';
import { FilePond, registerPlugin } from 'react-filepond';
import IBMServices from '@/_helpers/ibm-cloud';
import { postService } from '@/_services/post-service';
import { FilePondFile } from 'filepond';

const IMB = new IBMServices();
interface IFormValues {
  contentText: string;
  imgUrl: {key: string, url: string}[];
  imgfile: any[];
}

export default function PostsActionComponent(props: { refresh: () => void }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialValues: IFormValues = {
    contentText: '',
    imgUrl: [],
    imgfile: []
  }
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      const params = {
        contentText: values.contentText,
        imgUrl: values.imgUrl
      }

      postService.postNow(params).then((res: any) => {
        console.log(res);
        // reset form, filepond, and close drawer
        formik.resetForm();
        onClose();
      }).catch((err: any) => {
        console.log(err);
      });
    }
  });

  const filePonServerProcess = async (fieldName: string, file: any, metadata: any, load: any, error: any, progress: any, abort: any) => {
    await postService.uploadFile(file).then((res: any) => {
      if(res.status === true) {
        const key = res.results.Key;
        const location = res.results.Location;
        formik.setFieldValue('imgUrl', [...formik.values.imgUrl, {key: key, url: location}]);
        load(res.results);
      } else {
        error('Upload failed');
      }
    }).catch((err: any) => {
      error('Upload failed');
    });
  }

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
                  // files={formik.values.imgfile}
                  onremovefile={(err:any, file: FilePondFile) => {
                    if(formik.values.imgUrl.length === 0) return;
                    const newImgUrl = formik.values.imgUrl.filter(({ key }) => key !== file.filename);
                    formik.setFieldValue('imgUrl', newImgUrl);
                  }}
                  allowMultiple={true}
                  maxFiles={3}
                  // name="imgfile"
                  labelIdle='Drop or Upload Image.'
                  credits={false}
                  server={{
                    process: filePonServerProcess,
                  }}
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