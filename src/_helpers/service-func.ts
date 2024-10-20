import authOption from "@/_utils/auth-option";
import { getServerSession } from "next-auth";

export const serviceFunction = {
  generateQueryString,
  randomString,
  generateBoundary,
  allUserAbleInSystem,
  joinAlbum,
};

function generateQueryString(params: any, prefix = "") {
  const searchParams = new URLSearchParams();
  for (const key in params) {
    const fullKey = prefix ? `${prefix}[${key}]` : key;
    if (typeof params[key] === "object" && params[key] !== null) {
      // If the value is an object, recursively generate query string for it
      const nestedParams = generateQueryString(params[key], fullKey);
      // Merge nestedParams with searchParams
      new URLSearchParams(nestedParams).forEach((value, name) => {
        searchParams.append(name, value);
      });
    } else {
      searchParams.append(fullKey, params[key]);
    }
  }

  return searchParams.toString();
}

function randomString(length: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function generateBoundary() {
  return `--------------------------${randomString(24)}`;
}

function allUserAbleInSystem() {
  return [
    {
      emailAddress: 'pitchananbam21627@gmail.com',
    },
    {
      emailAddress: 'phiraphat.sukkasem@gmail.com',
    }
  ]
}

async function joinAlbum(email: string, accessToken: string) {
  try {
    const query = new URLSearchParams({ title: 'OurDailyApp' }).toString()
    const checkUserInAlbum = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/google-picture/check-is-user-in-album?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-user-email': email,
      },
    });

    if (checkUserInAlbum.ok) {
      const jsonObj = await checkUserInAlbum.json();
      if (jsonObj.status === true && !jsonObj.results.isJoined) {
        const googleJoinAlbumEndPoint = `https://photoslibrary.googleapis.com/v1/sharedAlbums:join`;
        const joinAlbumHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }

        const joinAlbumBody = {
          shareToken: jsonObj.results.shareToken
        }

        const resJoinAlbum = await fetch(googleJoinAlbumEndPoint, {
          method: 'POST',
          headers: joinAlbumHeader,
          body: JSON.stringify(joinAlbumBody)
        })

        if (resJoinAlbum.ok) {
          const resUpdateAlbumOwner = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/google-picture/add-user-to-album`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-user-email': email,
            },
            body: JSON.stringify({
              albumId: jsonObj.results.albumId,
              role: 'joiner',
            }),
          });

          if (resUpdateAlbumOwner.ok) {
            console.log('User added to album');
          } else {
            console.error('Failed to add user to album');
          }
        } else {
          console.log(await resJoinAlbum.json());
          console.error('Failed to join album');
        }
      }
    } else {
      console.error('Failed to check user in album');
    }
  } catch (error) {
    console.error('Error in joinAlbumIfNeeded:', error);
  }
}
