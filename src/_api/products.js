import axios from "./axios.config"

const createProduct = async (payload) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        method: "POST",
        body: payload
    }
    )
    const data = await res.json()
    console.log({ data })
    return data

}
const updateProduct = async (id, payload) => {
    const req = await axios.post(`/products/${id}`, payload)
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