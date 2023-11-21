import { MethodType } from "../consts/api";
import { RequestParams, request } from "../utils/request";

export const getNextEvents = async (token: RequestParams['token']) => {
    return await request({
        route: '/event/next',
        method: MethodType.GET,
        token: token
    });
}