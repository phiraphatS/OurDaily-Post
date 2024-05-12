import { handleResponse } from "@/_helpers/handle-response";
import { authHeader } from "@/_helpers/auth-header";
import { serviceFunction } from "@/_helpers/service-func";

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
    .then(res => {
        return res;
    });
}