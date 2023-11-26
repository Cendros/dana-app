import { MethodType } from "../consts/api";
import { RequestParams, request } from "../utils/request";

export const getNextEvents = async (token: RequestParams['token']) => {
    return await request({
        route: '/event/next',
        method: MethodType.GET,
        token: token
    });
}

export const getMyTickets = async (token: RequestParams['token']) => {
    return await request({
        route: '/event/my',
        method: MethodType.GET,
        token: token
    });
}

export const bookEvent = async (token: RequestParams['token'], eventId: number) => {
    return await request({
        route: '/event/book',
        method: MethodType.POST,
        token: token,
        body: { eventId: eventId }
    });
}