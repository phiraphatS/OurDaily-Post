'use client';
import { HStack, Button, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, Textarea, FormControl, DrawerHeader, Box } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useFormik } from 'formik';
import { FilePond } from 'react-filepond';
import { FilePondFile } from 'filepond';
import { postService } from '@/_services/post-service';
// Import the plugin code

interface IFormValues {
    contentText: string;
    imgUrl: { key: string, url: string }[];
    imgfile: any[];
}

interface IProps {
    isOpen: boolean;
    refresh: () => void;
    onClose: () => void;
}

export default function PostDrawerComponent({ isOpen, refresh, onClose }: IProps) {

    const initialValues: IFormValues = {
        contentText: '',
        imgUrl: [],
        imgfile: []
    }

    const formik = useFormik({
        initialValues: initialValues,
        // validationSchema: validateSchema,
        onSubmit: async (values) => {
            const params = {
              contentText: values.contentText,
              imgUrl: values.imgUrl
            }

            postService.postNow(params).then((res: any) => {
              // console.log(res);
              // reset form, filepond, and close drawer
              formik.resetForm();
              refresh();
              onClose();
            }).catch((err: any) => {
              console.log(err);
            });
        }
    });

    const filePonServerProcess = async (fieldName: string, file: any, metadata: any, load: any, error: any, progress: any, abort: any) => {
        await postService.uploadFile(file).then((res: any) => {
            if (res.status === true) {
                const key = res.results.Key;
                const location = res.results.Location;
                formik.setFieldValue('imgUrl', [...formik.values.imgUrl, { key: key, url: location }]);
                load(res.results);
            } else {
                error('Upload failed');
            }
        }).catch((err: any) => {
            error('Upload failed');
        });
    }

    const isButtonDisabled = formik.values.contentText.length === 0 && formik.values.imgUrl.length === 0;
    return (
        <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            returnFocusOnClose={false}
        >
            <DrawerOverlay>
                <DrawerContent>
                    <form onSubmit={formik.handleSubmit} autoComplete='off'>
                        <DrawerHeader>Create Post!</DrawerHeader>
                        <DrawerBody>
                            <FormControl>
                                {/* <FormLabel htmlFor="contentText">Create Post for our!</FormLabel> */}
                                <Textarea
                                    required
                                    value={formik.values.contentText}
                                    onChange={(e) => { formik.setFieldValue('contentText', e.target.value) }}
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
                                onremovefile={(err: any, file: FilePondFile) => {
                                    if (formik.values.imgUrl.length === 0) return;
                                    const newImgUrl = formik.values.imgUrl.filter(({ key }) => key !== file.filename);
                                    formik.setFieldValue('imgUrl', newImgUrl);
                                }}
                                acceptedFileTypes={['jpg', 'jpeg', 'png']}
                                allowMultiple={true}
                                maxFiles={6}
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
                                <Button colorScheme="blue" type="submit" isDisabled={isButtonDisabled}>
                                    Post
                                </Button>
                            </HStack>
                        </DrawerFooter>
                    </form>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}
