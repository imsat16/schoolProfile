import { api, token } from "./api";

interface Login {
    email?: string,
    password?: string
}

interface addUser {
    nama: string
    email: string
    password: string
}

interface editUser {
    id : number
    nama: string
    email: string
    password: string
}

export const login = async (e: Login) => {
    try {
        const res = await api.post(`/user/login`, e, {
            data: e,
            headers:{
                'Content-Type': 'Application/JSON',
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

export const editUser = async (userData:editUser) => {
    try {
        const res = await api.put(`/user`, userData, {
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
        const res = await api.get(`/user`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error:any) {
        throw new Error(error.message)
    }
}