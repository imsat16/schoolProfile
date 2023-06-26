import axios from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
    baseURL: process.env.baseURL
})

const cookies = parseCookies();
export const token = cookies.token