import { authHeader } from "@/_helpers/auth-header";
import { serviceFunction } from "@/_helpers/service-func";
import Cookies from 'js-cookie';
import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject<any>(process.browser ? JSON.parse(localStorage.getItem("user") || "{}") : {});
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
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }

            const response: any = await res.json();
            const user = response;
                if (user) {
                    Cookies.set('access_token', user.access_token, { expires: 3 });

                    const filterSensitiveData = {
                        id: user.id,
                        email: user.email,
                    }
                    localStorage.setItem("user", JSON.stringify(filterSensitiveData));
                    currentUserSubject.next(user);
                    return user;
                }
            return null;
        });
}