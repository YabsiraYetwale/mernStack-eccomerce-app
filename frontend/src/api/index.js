import axios from 'axios'

axios.defaults.baseURL="http//localhost:4000"

axios.interceptors.request.use((req)=>{
    if (localStorage.getItem("user-auth")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user-auth"))}`
    }
    return req
})
export const signUpUser=(user)=> axios.post('/users/signup',user)
export const signInUser=(user)=> axios.post('/users/signin',user)

export const createProduct=(product)=> axios.post('/products',product)
export const fetchProducts=()=> axios.get('/products')
export const fetchProduct=(id)=> axios.get(`/products/${id}`)
export const updateProduct=(id,product)=> axios.patch(`/products/${id}`,product)
export const deleteProduct=(id)=> axios.delete(`/products/${id}`)
