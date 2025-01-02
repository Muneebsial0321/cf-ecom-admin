import axios from "./axios.config"

const createProduct = async (payload) => {
    const req = await axios.post('/products', payload)
    console.log({ data: req.data })
    return req.data

}
const updateProduct = async (id,payload) => {
    const req = await axios.post(`/products/${id}`,payload)
    console.log({ data: req.data })
    return req.data
}

const deleteProduct = async (id) => {
    const req = await axios.delete(`/products/${id}`)
    console.log({ data: req.data })
    return req.data

}

const getAllProducts = async (id) => {
    const req = await axios.get(`/products/${id}`)
    console.log({ data: req.data })
    return req.data

}

const getSingleProduct = async (id) => {
    const req = await axios.get(`/products/${id}`)
    console.log({ data: req.data })
    return req.data

}

export { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct }