import { oauth2Client } from '@/_utils/googleAuth';
import { NextApiRequest, NextApiResponse } from 'next';

export function handler(req: NextApiRequest, res: NextApiResponse) {
  const scopes = [
    'https://www.googleapis.com/auth/photoslibrary',
    'https://www.googleapis.com/auth/photoslibrary.sharing'
  ];

  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });

  res.redirect(url);
}