import { RequestParams, request } from "../utils/request";

export const getCode128 = async (token: RequestParams['token']) => {
    return await request({
        route: '/user/code128/',
        method: 'GET',
        token: token
    });
}