import { createAndShareMediaItem } from '@/_utils/createAndShareMediaItem';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const uploadToken = await createAndShareMediaItem(req);
        // return new Response(JSON.stringify(uploadToken), { status: 200 });
        return NextResponse.json(uploadToken, { status: 200 });
    } catch (error: any) {
        console.log('Error:', error);
        return NextResponse.json('Error creating media item', { status: 500 });
    }
}