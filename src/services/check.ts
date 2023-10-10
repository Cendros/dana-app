import { RequestParams, request } from "../utils/request";

export const getChecks = async (token: RequestParams['token']) => {
    return await request({
        route: '/check/self',
        method: 'GET',
        token: token
    });
}