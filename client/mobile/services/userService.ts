import axios from 'axios';

const BASE_URL = 'https://localhost:3000/api/user';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Generic POST request
export const postRequest = async (endpoint: string, data: any) => {
  try {
    const response: any = await apiService.post(endpoint, data);
    return response.data;
  } catch (error: any) {
    console.error('API POST Request Error:', error?.response?.data || error.message);
    throw error;
  }
};

// Generic GET request
export const getRequest = async (endpoint: string) => {
  try {
    const response: any = await apiService.get(endpoint);
    return response.data;
  } catch (error: any) {
    console.error('API GET Request Error:', error?.response?.data || error.message);
    throw error;
  }
};

// Generic PUT request
export const putRequest = async (endpoint: string, data: any) => {
  try {
    const response: any = await apiService.put(endpoint, data);
    return response.data;
  } catch (error: any) {
    console.error('API PUT Request Error:', error?.response?.data || error.message);
    throw error;
  }
};

// Generic DELETE request
export const deleteRequest = async (endpoint: string) => {
  try {
    const response: any = await apiService.delete(endpoint);
    return response.data;
  } catch (error: any) {
    console.error('API DELETE Request Error:', error?.response?.data || error.message);
    throw error;
  }
};

export const createUser = async (data: any) => postRequest('/create', data);
export const loginUser = async (data: any) => postRequest('/login', data);