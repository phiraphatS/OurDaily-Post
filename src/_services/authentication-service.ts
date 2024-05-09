import { authHeader } from "@/_helpers/auth-header";
import { cookies } from "next/headers";

export const authenticationService = {
    login,
};

async function login(params: any) {
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(params)
    };
    return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/authentication/login`, requestOptions)
    .then(async (res) => {
        if ([201, 200].includes(res.status)) {
            const data = await res.json();
            if (data) {
                return data;
            }
        } else {
            throw new Error('unauthorized');
        }
    });
}