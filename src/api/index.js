import axios from 'axios'

const url = 'http://localhost:8000/api'

export const postSignin = (email,password) => axios.post(`${url}/admin/login`,email,password);

export const getAllProducts = () => axios.get(`${url}/product/getAllProducts`);

export const addProduct = (name,price) => axios.post(`${url}/product/postproduct`,name,price)

export const registerUser = (name,email,password,password_confirmation,phone)=>axios.post(`${url}/user/register`,name,email,password,password_confirmation,phone)

export const getAllUser = () => axios.get(`${url}/getAllUser`);