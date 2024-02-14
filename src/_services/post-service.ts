import { handleResponse } from "@/_helpers/handle-response";
import { authHeader } from "@/_helpers/auth-header";
import { serviceFunction } from "@/_helpers/service-func";

export const postService = {
    postNow,
    uploadFile,
    getFeeds,
}

async function getFeeds(params: any) {
    const requestOptions = {
        method: "GET",
        headers: authHeader(),
    };

    const queryString = serviceFunction.generateQueryString(params);
    const urlEnpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/feeds/get-feeds?${queryString}`;
    return fetch(urlEnpoint, requestOptions)
    .then(response => handleResponse(response))
    .then(res => {
        return res;
    });
}

async function postNow(params: any) {
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(params)
    };
    return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/feeds/post-now`, requestOptions)
    .then(handleResponse)
    .then(res => {
        return res;
    });
}

async function uploadFile(params: any) {
    const formData = new FormData();
    formData.append('file', params);
    const requestOptions = {
        method: "POST",
        body: formData
    };
    return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/uploadfile/upload`, requestOptions)
    .then(handleResponse)
    .catch((err) => {
        throw err;
    });
}