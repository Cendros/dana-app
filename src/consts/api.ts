// export const API_URL = "http://localhost:3000/app";
const SERVER_URL = "https://d6x7p3bs-3000.uks1.devtunnels.ms";
export const API_URL = `${SERVER_URL}/app`;
export const ASSETS_URL = `${SERVER_URL}/public/images`;

export enum MethodType {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}