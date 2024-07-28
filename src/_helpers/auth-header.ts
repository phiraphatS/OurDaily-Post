import Cookies from 'js-cookie';

export function authHeader(isNoContentType = false):HeadersInit {
    // Now we use cookie to store the token
    // return authorization header with jwt token
    const getAccessTokenFromCookie = () => {
        const accessToken = Cookies.get('accessToken');
        return accessToken;
    }

    const accessToken = getAccessTokenFromCookie();
    return { 
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
        'Content-Type': isNoContentType ? '' : 'application/json'
    };
}