import axios from 'axios';

const api = axios.create({
	baseURL: 'https://61824bbb84c2020017d89da4.mockapi.io/api/v1/'
});

export default api;
