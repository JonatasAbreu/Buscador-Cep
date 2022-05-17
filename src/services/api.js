import axios from "axios";



const api = axios.create({
    baseURL: "http://viacep.com.br/ws/"
})

export default api