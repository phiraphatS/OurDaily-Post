// pages/api/upload.ts
// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, type NextRequest } from 'next/server'
import { pipeline } from 'stream';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { uploadToGooglePhotos } from '@/_utils/uploadToGooglePhotos';
const pump = promisify(pipeline);

export async function POST(req: NextRequest) {
  let fields;
  let files;

  try {
    const formData = await req.formData();
    const file: any = formData.getAll('file')[0];

    const mimeType = file.type;
    // Add date to the file name
    const fileName = `${new Date().toISOString()}_${file.name}`;
    const originalFileName = file.name;

    const uploadToken = await uploadToGooglePhotos(formData, mimeType, req);
    const responseBody = {
      originalFileName: originalFileName,
      fileName: fileName,
      uploadToken: uploadToken,
    }

    return NextResponse.json(responseBody, { status: 200 });

  } catch (error: any) {
    console.log('Error:', error);
    return NextResponse.json('Error uploading file', { status: 500 });
  }
}