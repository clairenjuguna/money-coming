import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
        Cookies.set('token', response.data.token, { expires: 1 }); // 1 day expiry
    }
    return response.data;
};

export const logout = () => {
    Cookies.remove('token');
};
