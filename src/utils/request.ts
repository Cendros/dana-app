import { API_URL } from "../consts/api";

const methods = ['GET', 'POST', 'PUT', 'DELETE'] as const;
type MethodType = typeof methods[number];

export type RequestParams = {
    route: string
    method: MethodType,
    body?: Record<string, string | number>
    token?: string | undefined
}

export const request = async ({ route, method, body, token }: RequestParams) => {
    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...token && {'Authorization': `Bearer ${token}`}
        },
        ...body && { body: JSON.stringify(body) }
    };
    
    const res = await fetch(`${API_URL}${route}`, options);
    try {
        return await res.json();
    } catch (_err) {
        return { error: true }
    }
}