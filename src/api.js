import axios from 'axios';

const API_URL = "https://server-cn1w.onrender.com/api"; // Update with your actual backend URL

export const getData = async () => {
    const response = await axios.get(`${API_URL}/test`);
    return response.data;
};

export const createData = async (newData) => {
    const response = await axios.post(`${API_URL}/test`, newData);
    return response.data;
};

export const updateData = async (id, updatedData) => {
    const response = await axios.put(`${API_URL}/test/${id}`, updatedData);
    return response.data;
};

export const deleteData = async (id) => {
    const response = await axios.delete(`${API_URL}/test/${id}`);
    return response.data;
};
