// pages/api/auth/google/callback.ts
import { oauth2Client } from '@/_utils/googleAuth';
import { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  try {
    const { tokens } = await oauth2Client.getToken(code as string);
    oauth2Client.setCredentials(tokens);

    // #TODO: Store tokens securely (e.g., in a database)
    
    // Set cookies or session data to keep user logged in
    res.setHeader('Set-Cookie', `token=${tokens.access_token}; Path=/; HttpOnly`);
    // Redirect to your app's main page
    res.redirect('/feeds');
  } catch (error) {
    console.error('Error getting OAuth tokens:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
}