// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Your backend API URL

export const signup = async ({ name, email, password }) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { name, email, password });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export default { signup };
