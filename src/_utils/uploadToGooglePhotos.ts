// utils/uploadToGooglePhotos.ts
import { cookies } from 'next/headers';
import fs from 'fs';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function uploadToGooglePhotos(formData: FormData, mimeType: string, req: NextRequest) {
    try {
        // All endpoints we need to call
        const UploadBytesEndpoint = 'https://photoslibrary.googleapis.com/v1/uploads';
        // const CreateMediaItemEndpoint = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';

        // 1. Get upload token
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        console.log('Token:', token);
        if (!token) {
            throw new Error('No token found');
        }
        const accessToken = token.accessToken

        // 2. Upload Bytes to Google Photos
        const uploadBytesHeaders = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/octet-stream',
            'X-Goog-Upload-Content-Type': mimeType,
            'X-Goog-Upload-Protocol': 'raw',
        };

        const response = await fetch(UploadBytesEndpoint, {
            method: 'POST',
            headers: uploadBytesHeaders,
            body: formData,
        });
        
        // Log the response for debugging
        console.log('Upload response status:', response.status);
        console.log('Upload response headers:', response.headers);

        // Check if the upload wasn't successful
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error(`Error uploading to Google Photos: ${response.status} ${response.statusText}`);
        }

        //#### results
        const uploadToken = await response.text();
        return uploadToken;
        
    } catch (error) {
        console.error('Error uploading to Google Photos:', error);
        throw error;
    }
}