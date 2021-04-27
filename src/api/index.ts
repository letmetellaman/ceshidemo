import Axios from 'axios'
// import { HttpResponse } from '@/@types'
/**
 * @interface loginParams -登录参数
 * @property {string} username -用户名
 * @property {string} password -用户密码
 */
interface LoginParams {
    username: string
    password: string
}
export class UserService {

    static async login(params: LoginParams) {
        return Axios('http://hejunedu.com/qa/find', {
            method: 'get',
            responseType: 'json',
            params: {
                ...params
            },
        })
    }

    static async resgister(params: LoginParams) {
        return Axios('/api/user/resgister', {
            method: 'get',
            responseType: 'json',
            params: {
                ...params
            },
        })
    }
}