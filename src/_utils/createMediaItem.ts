import { getSession } from 'next-auth/react';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

interface uploadItemInterface {
    fileName: string;
    uploadToken: string;
}

export async function createMediaItem (req: NextRequest) {
    try {
        // All endpoints we need to call
        const CreateMediaItemEndpoint = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';

        // 1. Get upload token
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        if (!token) {
            throw new Error('No token found');
        }
        const accessToken = token.accessToken

        // 1.1 Get body
        const uploadItem: uploadItemInterface[] = await req.json();

        // 2. Create Media Item
        const createMediaItemHeaders = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        }

        const requestBody = {
            newMediaItems: uploadItem.map((item) => {
                return {
                    description: 'Uploaded from OurDailyApp',
                    simpleMediaItem: {
                        fileName: item.fileName,
                        uploadToken: item.uploadToken,
                    }
                }
            })
        }

        const response = await fetch(CreateMediaItemEndpoint, {
            method: 'POST',
            headers: createMediaItemHeaders,
            body: JSON.stringify(requestBody),
        });

        // Log the response for debugging
        console.log('Upload response status:', response.status);
        console.log('Upload response headers:', response.headers);

        // Check if the upload was't successful
        // Follow the retry and error handling best practices, keeping the following points in mind
        if (response.status === 429) {
            throw new Error('Rate limit exceeded');
        } else if (response.status !== 200) {
            const errorText = await response.text();
            console.error('Error response:', errorText);
            throw new Error('Error creating media item');
        }

        //#### results
        const mediaItem = await response.json();
        return mediaItem;
        
    } catch (error) {
        console.error('Error creating media item:', error);
        throw error;
    }
}