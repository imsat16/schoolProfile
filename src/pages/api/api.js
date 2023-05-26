import axios from "axios";

export const api = axios.create({
    baseURL : process.env.baseURL2
})

export const getProducts = async () => {
    try {
        const res = await api.get('https://gnews.io/api/v4/search?q=indonesia&lang=id&country=us&apikey=c3b691cd40a6ef29d8519c686d0d9f27')
        return res.data.articles
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