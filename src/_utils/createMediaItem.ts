import { cookies } from 'next/headers';
import fs from 'fs';

interface uploadItemInterface {
    fileName: string;
    uploadToken: string;
}

export async function createMediaItem (uploadItem: uploadItemInterface[]) {
    try {
        // All endpoints we need to call
        const CreateMediaItemEndpoint = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';

        // 1. Get upload token
        const cookiesStorage = cookies();
        const accessToken = cookiesStorage.get('token');

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
                        ...item
                    }
                }
            })
        }

        const response = await fetch(CreateMediaItemEndpoint, {
            method: 'POST',
            headers: createMediaItemHeaders,
            body: JSON.stringify(requestBody),
        });

        // Check if the upload was't successful
        // Follow the retry and error handling best practices, keeping the following points in mind
        if (response.status === 429) {
            throw new Error('Rate limit exceeded');
        } else if (response.status !== 200) {
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