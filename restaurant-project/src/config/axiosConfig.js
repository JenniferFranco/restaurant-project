import axios from 'axios';

//nota: agregar .env
const API_URL = import.meta.env.VITE_API_URL;

const axiosIntance = axios.create ({
    baseURL: API_URL,
    timeout: 5000, //tiempo de respuesta 5 segundos
});

//agregar el token automaticamente 
axiosIntance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

//manejo global de errores de respuesta 
axiosIntance.interceptors.response.use (
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error ('Token inváldo o expirado');
            //nota: revisar esta parte 
            // localStorage.removeItem ('token');
            // window.location.href = '/login';
        }
        return Promise.reject (error);
    }
);


export default axiosIntance;