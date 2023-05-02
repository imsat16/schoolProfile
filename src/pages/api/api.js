import axios from "axios";

export const api = axios.create({
    baseURL : process.env.baseURL
})

export const getProducts = async () => {
    try {
        const res = await api.get('https://fakestoreapi.com/products')
        return res.data
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getProductsId = async (id) => {
    try {
        const res = await api.get(`https://fakestoreapi.com/products/${id}`)
        return res.data
    } catch (error) {
        throw new Error(error.message)
    }
}