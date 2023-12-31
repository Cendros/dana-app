import { MethodType } from "../consts/api";
import { RequestParams, request } from "../utils/request";

export const getBalance = async (token: RequestParams['token']) => {
    return await request({
        route: '/user/balance',
        method: MethodType.GET,
        token: token
    });
}