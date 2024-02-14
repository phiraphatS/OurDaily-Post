
export function authHeader() {
    // return authorization header with jwt token
    const getAccessTokenFromCookie = () => {
        const cookies = document.cookie.split(';');
        const accessTokenCookie = cookies.find(cookie => cookie.includes('accessToken='));
        if (!accessTokenCookie) {
            return null;
        }
        const accessToken = accessTokenCookie.split('=')[1];
        return accessToken;
    }

    const accessToken = getAccessTokenFromCookie();
    if (accessToken) {
        return { 
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };
    } else {
        return {
            Authorization: ``,
            'Content-Type': 'application/json'
        };
    }
}
