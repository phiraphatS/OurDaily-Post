import Cookies from 'js-cookie';
import { useSession } from 'next-auth/react';

export function authHeader(isNoContentType = false):HeadersInit {
    // Now we use cookie to store the token
    // return authorization header with jwt token
    const getAccessTokenFromCookie = () => {
        const accessToken = Cookies.get('accessToken');
        return accessToken;
    }

    let userEmail;
    const sessionStorage = useSession()
    if (sessionStorage && sessionStorage.data && sessionStorage.data.user) {
        userEmail = sessionStorage.data.user.email;
    }

    const accessToken = getAccessTokenFromCookie();
    return { 
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
        'Content-Type': isNoContentType ? '' : 'application/json',
        'X-User-Email': userEmail ? userEmail : ''
    };
}
