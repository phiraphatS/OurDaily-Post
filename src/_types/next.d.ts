// types/next.d.ts
import { NextApiRequest } from 'next'
import { File } from 'multer'

declare module 'next' {
  interface NextApiRequest extends Express.Request {}
}

interface MulterRequest extends NextApiRequest {
  file: Express.Multer.File
}