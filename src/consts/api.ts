// const SERVER_URL = 'http://localhost:3000';
const SERVER_URL = 'http://ludovic.lahougue.caen.mds-project.fr/dana';
export const API_URL = `${SERVER_URL}/app`;
export const ASSETS_URL = `${SERVER_URL}/public/images`;

export enum MethodType {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}