import { api, token } from "./api";

interface Login {
    email?: string,
    password?: string
}

interface addUser {
    nama : string
    password: string
    username: string
    role: number
}

export const login = async (e: Login) => {
    try {
        const res = await api.post(`/user/login`, e, {
            data: e,
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        return res.data
    } catch (error:any) {
        // console.log(error.response.data.message)
        throw new Error(error.response.data.message);
    }
}

export const tambahUser = async (userData:addUser) => {
    try {
        const res = await api.post(`/user/register`, userData, {
            data: userData,
            headers:{
                Authorization: `Bearer ${token}`
            },
        });
        return res.data
    } catch (error:any) {
        console.log(error.response.data.message)
        throw new Error(error.response.data.message);
    }
}

export const userList = async () => {
    try {
        const res = await api.get(`/account/users`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error:any) {
        throw new Error(error.message)
    }
}

export const me = async () => {
    try {
        const res = await api.get(`/account/me`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error:any) {
        throw new Error(error.message)
    }
}