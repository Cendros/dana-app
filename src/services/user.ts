import { MethodType } from "../consts/api";
import { RequestParams, request } from "../utils/request";

export const getBalance = async (token: RequestParams['token']) => {
    return await request({
        route: '/user/balance',
        method: MethodType.GET,
        token
    });
}

export const getProfile = async (token: RequestParams['token']) => {
    return await request({
        route: '/user/profile',
        method: MethodType.GET,
        token
    })
}

export const updateProfile = async (token: RequestParams['token'], firstname: string | undefined | null, lastname: string | undefined | null, oldPassword: string | undefined | null, password: string | undefined | null) => {
    return await request({
        route: '/user/update',
        method: MethodType.POST,
        token,
        body: {
            ...firstname && { firstname },
            ...lastname && { lastname },
            ...oldPassword && { oldPassword },
            ...password && { password }
        }
    })
}