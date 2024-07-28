import { createMediaItem } from '@/_utils/createMediaItem';
import { type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const uploadToken = await createMediaItem(req);
        return new Response(JSON.stringify(uploadToken), { status: 200 });
    } catch (error: any) {
        console.log('Error:', error);
        return new Response("An error occurred", { status: 500 });
    }
}