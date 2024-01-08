import axios from 'axios';

//Base da URL:  https://api.themoviedb.org/3/
// URL DA API: movie/now_playing?api_key=6aefb579813c16340a6f2750004df203&language=pt-BR  

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;