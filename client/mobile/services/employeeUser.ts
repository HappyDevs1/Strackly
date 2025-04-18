import axios from "axios";
import { IP_ADDRESS } from "../utils/config";

const API_BASE_URL = `http://${IP_ADDRESS}:3000/api/employee`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerEmployeeUser = async (userData: any, orgId: string) => {
  try {
    const response = await api.post(`/create/${orgId}`, userData);
    console.log("Employee user created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating employee user:", error);
    throw error;
  }
}

export const loginEmployeeUser = async (credentials: any) => {
  try {
    const response = await api.post(`/login`, credentials);
    console.log("Employee user logged in successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging in employee user:", error);
    throw error;
  }
}

export const getEmployeeUser = async (userId: string) => {
  try {
    const response = await api.get(`/get/${userId}`);
    console.log("Fetched employee user successfully:", response.data);
    if (response.status !== 200) {
      throw new Error(`Error fetching employee user: ${response.statusText}`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching employee user:", error);
    throw error;
  }
}

// Add last service to get all employee users in an organisation