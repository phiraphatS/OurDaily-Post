import { getSession } from 'next-auth/react';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { getServerSession } from 'next-auth';
import authOption from './auth-option';

interface uploadItemInterface {
    fileName: string;
    uploadToken: string;
}

export async function createAndShareMediaItem(req: NextRequest) {
    try {
        const session = await getServerSession(authOption) as any;
        if (!session) {
            throw new Error('No session found');
        }
        
        const userEmail = session.user?.email;
        if (!userEmail) {
            throw new Error('No user email found in session');
        }
        const CreateMediaItemEndpoint = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';
        const ShareAlbumEndpoint = 'https://photoslibrary.googleapis.com/v1/albums';

        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        if (!token) {
            throw new Error('No token found');
        }
        const accessToken = token.accessToken;

        const { uploadItems }: { uploadItems: uploadItemInterface[] } = await req.json();

        // Check if album already exists
        const responseCheckAlbum = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/google-picture/create-or-get-album`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-email': session?.user?.email || '',
            },
            body: JSON.stringify({
                albumName: "OurDailyApp",
            }),
        });

        if (!responseCheckAlbum.ok) {
            throw new Error('Failed to check album');
        }

        const responseCheckAlbumJson = await responseCheckAlbum.json();
        let albumID = null;
        let id = responseCheckAlbumJson.results.album.id;
        if (responseCheckAlbumJson.status === true && responseCheckAlbumJson.results.isHasAlbum) {
            albumID = responseCheckAlbumJson.results.album.googleAlbumId;
        } else {
            // Create a new album
            const createAlbumResponse = await fetch(`${ShareAlbumEndpoint}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    album: { title: 'OurDailyApp' }
                }),
            });

            if (!createAlbumResponse.ok) {
                throw new Error('Failed to create album');
            }

            const { id: albumId } = await createAlbumResponse.json();


            // Share the album
            const shareAlbumResponse = await fetch(`${ShareAlbumEndpoint}/${albumId}:share`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sharedAlbumOptions: {
                        isCollaborative: true,
                        isCommentable: true,
                    },
                }),
            });

            if (!shareAlbumResponse.ok) {
                console.log(await shareAlbumResponse.json());
                throw new Error('Failed to share album');
            }

            const sharedAlbumDetails = await shareAlbumResponse.json();

            const resUpdateAlbum = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/google-picture/update-shared-album`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-email': session?.user?.email || '',
                },
                body: JSON.stringify({
                    id: id,
                    googleAlbumId: albumId,
                    shareToken: sharedAlbumDetails.shareInfo.shareToken,
                    shareableUrl: sharedAlbumDetails.shareInfo.shareableUrl,
                }),
            });

            if (!resUpdateAlbum.ok) {
                throw new Error('Failed to update album');
            }

            albumID = albumId;

            const resUpdateAlbumOwner = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/google-picture/add-user-to-album`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-email': session?.user?.email || '',
                },
                body: JSON.stringify({
                    albumId: id,
                    role: 'owner',
                }),
            });

            if (!resUpdateAlbumOwner.ok) {
                throw new Error('Failed to update album owner');
            }
        }

        // Add media items to the album
        const createMediaItemHeaders = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        };

        const requestBody = {
            albumId: albumID,
            newMediaItems: uploadItems.map((item) => ({
                description: 'Uploaded from OurDailyApp',
                simpleMediaItem: {
                    fileName: item.fileName,
                    uploadToken: item.uploadToken,
                }
            }))
        };

        const addMediaResponse = await fetch(CreateMediaItemEndpoint, {
            method: 'POST',
            headers: createMediaItemHeaders,
            body: JSON.stringify(requestBody),
        });

        if (!addMediaResponse.ok) {
            console.log(await addMediaResponse.json());
            throw new Error('Failed to add media items to album');
        }
        const mediaItem = await addMediaResponse.json();

        // const addMediaItemToAlbumHeaders = {
        //     Authorization: `Bearer ${accessToken}`,
        //     'Content-Type': 'application/json',
        // };

        // const addMediaItemToAlbumBody = {
        //     mediaItemIds: mediaItem.newMediaItemResults.map((item: any) => item.mediaItem.id),
        // };

        // const addMediaItemToAlbumResponse = await fetch(`${ShareAlbumEndpoint}/${albumID}:batchAddMediaItems`, {
        //     method: 'POST',
        //     headers: addMediaItemToAlbumHeaders,
        //     body: JSON.stringify(addMediaItemToAlbumBody),
        // });

        // if (!addMediaItemToAlbumResponse.ok) {
        //     console.log(await addMediaItemToAlbumResponse.json());
        //     throw new Error('Failed to add media items to album');
        // }

        return mediaItem;

    } catch (error) {
        console.error('Error creating and sharing media item:', error);
        throw error;
    }
}