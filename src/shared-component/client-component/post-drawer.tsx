'use client';
import { HStack, Button, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, Textarea, FormControl, DrawerHeader, Box } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useFormik } from 'formik';
import { FilePond } from 'react-filepond';
import * as FilePondAddPlugin from 'filepond';
import { FilePondFile } from 'filepond';
import { postService } from '@/_services/post-service';
import { serviceFunction } from '@/_helpers/service-func';
// Import the plugin code
import FilePondPluginImageResize from 'filepond-plugin-image-resize';

FilePondAddPlugin.registerPlugin(FilePondPluginImageResize);
interface IFormValues {
    contentText: string;
    uploadToken: { fileName: string, uploadToken: string, originalFileName: string }[];
}

interface IProps {
    isOpen: boolean;
    refresh: () => void;
    onClose: () => void;
}

export default function PostDrawerComponent({ isOpen, refresh, onClose }: IProps) {

    const initialValues: IFormValues = {
        contentText: '',
        uploadToken: [],
    }

    const formik = useFormik({
        initialValues: initialValues,
        // validationSchema: validateSchema,
        onSubmit: async (values) => {
            let mediaItem = [];
            console.log('values', values);
            
            if (values.uploadToken  && values.uploadToken.length > 0) {
                const fetchData = await fetch('/api/googlePhotoApi/googleCreateMediaItem', {
                    method: 'POST',
                    body: JSON.stringify(values.uploadToken),
                }).then(async (res) => await res.json())
                .catch((err: any) => {
                    console.log(err);
                });

                mediaItem = fetchData.newMediaItemResults || [];
            }

            const imgUrls = mediaItem.map((item: any) => ({ url: item.mediaItem.productUrl, key: item.mediaItem.id }));
            const params = {
                contentText: values.contentText,
                imgUrl: imgUrls
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
        // Ibm services
        // await postService.uploadFile(file).then((res: any) => {
        //     if (res.status === true) {
        //         const key = res.results.Key;
        //         const location = res.results.Location;
        //         formik.setFieldValue('imgUrl', [...formik.values.imgUrl, { key: key, url: location }]);
        //         load(res.results);
        //     } else {
        //         error('Upload failed');
        //     }
        // }).catch((err: any) => {
        //     error('Upload failed');
        // });

        // S3 services
        // await postService.uploadFileS3(file).then((res: any) => {
        //     if (res.status === true) {
        //         const { key, url } = res.results;
        //         formik.setFieldValue('imgUrl', [...formik.values.imgUrl, { key: key, url: url }]);
        //         load(res.results);
        //     } else {
        //         error('Upload failed');
        //     }
        // }).catch((err: any) => {
        //     error('Upload failed');
        // });

        // Google services
        const form = new FormData();
        form.append('file', file);
        await fetch('/api/googlePhotoApi/googleUploadFile', {
            method: 'POST',
            body: form,
        })
        .then(async (res) => {
            if (!res.ok) {
                throw new Error('Upload failed');
            }
            const uploadTokenObj = await res.json();
            return uploadTokenObj
        })
        .then((uploadTokenObj: any) => {
            if (uploadTokenObj) {
                formik.setFieldValue('uploadToken', [...formik.values.uploadToken, uploadTokenObj]);
                load(uploadTokenObj);
            } else {
                error('Upload failed');
            }
        }).catch((err: any) => {
            error('Upload failed');
        })
    }

    const isButtonDisabled = formik.values.contentText.length === 0 && formik.values.uploadToken.length === 0;
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
                                onremovefile={async (err: any, file: FilePondFile) => {
                                    if (formik.values.uploadToken.length === 0) return;
                                    const newImgUrl = formik.values.uploadToken.filter(({ originalFileName }) => originalFileName !== file.filename);
                                    formik.setFieldValue('uploadToken', newImgUrl);
                                    // delete file from server
                                    // await postService.deleteFileS3({ key: file.filename }).then((res: any) => {
                                    //     if (res.status === true) {
                                    //         const newImgUrl = formik.values.imgUrl.filter(({ originalname }) => originalname !== file.filename);
                                    //         formik.setFieldValue('imgUrl', newImgUrl);
                                    //     }
                                    // })
                                }}
                                imageResizeMode='contain'
                                allowImageResize={true}
                                imageResizeTargetHeight={500}
                                imageResizeTargetWidth={500}
                                acceptedFileTypes={['jpg', 'jpeg', 'png']}
                                allowMultiple={true}
                                maxFiles={6}
                                // name="uploadToken"
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
