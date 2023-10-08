import { apiUrl } from "../consts/api"

export const authUser = async (email: string, password: string) => {
    const res = await fetch(`${apiUrl}/auth/login/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
    return await res.json();
}