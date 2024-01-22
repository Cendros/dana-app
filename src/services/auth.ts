import { MethodType } from "../consts/api";
import { request } from "../utils/request";

export const authUser = async (email: string, password: string) => {
    return await request({
        route: '/login',
        method: MethodType.POST,
        body: {
            email,
            password
        }
    });
}