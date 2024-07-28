// pages/api/upload.ts
// import type { NextApiRequest, NextApiResponse } from 'next'
import { type NextRequest } from 'next/server'
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

    if (!file) {
      return new Response("No file found", { status: 400 });
    }

    const filePath = `./public/file/${file.name}`;

    // create folder file
    if (!fs.existsSync('./public/file')) {
      fs.mkdirSync('./public/file');
    }

    // Write the file to folder file
    await pump(file, fs.createWriteStream(filePath));

    const fullFilePath = path.resolve(filePath);
    const mimeType = file.type;
    // Add date to the file name
    const originalname = `${new Date().toISOString()}_${file.name}`;

    const uploadToken = await uploadToGooglePhotos(fullFilePath, mimeType, originalname);
    const responseBody = {
      fileName: originalname,
      uploadToken: uploadToken,
    }

    return new Response(JSON.stringify(responseBody), { status: 200 });

  } catch (error: any) {
    console.log('Error:', error);
    return new Response("An error occurred", { status: 500 });
  }
}