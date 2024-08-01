import { createMediaItem } from '@/_utils/createMediaItem';
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const uploadToken = await createMediaItem(req);
        // return new Response(JSON.stringify(uploadToken), { status: 200 });
        return NextResponse.json(uploadToken, { status: 200 });
    } catch (error: any) {
        console.log('Error:', error);
        return NextResponse.json('Error creating media item', { status: 500 });
    }
}