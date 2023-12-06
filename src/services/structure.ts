import { MethodType } from "../consts/api";
import { RequestParams, request } from "../utils/request";

export const getMyStructures = async (token: RequestParams['token']) => {
    return await request({
        route: '/structure/my',
        method: MethodType.GET,
        token: token
    });
}

export const getStructure = async (token: RequestParams['token'], id: number) => {
    return await request({
        route: `/structure/${id}`,
        method: MethodType.GET,
        token: token
    })
}