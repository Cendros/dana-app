import { MethodType } from "../consts/api";
import { request } from "../utils/request";

export const authUser = async (email: string, password: string) => {
    const body = {
        email: email,
        password: password
    }
    
    return await request({
        route: '/login',
        method: MethodType.POST,
        body: body
    });
}