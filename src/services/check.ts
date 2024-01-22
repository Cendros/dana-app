import { MethodType } from "../consts/api";
import { RequestParams, request } from "../utils/request";

export const getChecks = async (token: RequestParams['token']) => {
    return await request({
        route: '/check/self',
        method: MethodType.GET,
        token
    });
}