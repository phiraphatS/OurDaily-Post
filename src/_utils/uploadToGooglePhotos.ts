// utils/uploadToGooglePhotos.ts
import { cookies } from 'next/headers';
import fs from 'fs';

export async function uploadToGooglePhotos(filePath: string, mimeType: string, originalname: string) {
    try {
        // Read file content
        const fileContent = fs.readFileSync(filePath);
        // All endpoints we need to call
        const UploadBytesEndpoint = 'https://photoslibrary.googleapis.com/v1/uploads';
        // const CreateMediaItemEndpoint = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';

        // 1. Get upload token
        const cookiesStorage = cookies();
        const accessToken = cookiesStorage.get('token');

        // 2. Upload Bytes to Google Photos
        const uploadBytesheaders = {
            Authorization: `Bearer ${accessToken}`,
            ContentType: 'application/octet-stream',
            'X-Goog-Upload_Content_Type': mimeType,
            'X-Goog-Upload-Protocal': 'raw',
        }

        const response = await fetch(UploadBytesEndpoint, {
            method: 'POST',
            headers: uploadBytesheaders,
            body: fileContent,
        });

        // Check if the upload was't successful
        if (response.status !== 200) {
            throw new Error('Error uploading to Google Photos');
        }

        //#### results
        const uploadToken = await response.text();
        return uploadToken;
        
    } catch (error) {
        console.error('Error uploading to Google Photos:', error);
        throw error;
    } finally {
        // Delete the file after uploading
        fs.unlinkSync(filePath);
    }
}