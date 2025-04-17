import axios from "axios";
import { IP_ADDRESS } from "../utils/config";

const API_BASE_URL = `http://${IP_ADDRESS}:3000/api/user/master`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerMasterUser = async (userData: any) => {
  try {
    const response = await api.post("/register", userData);
    console.log("Service response: Master user registered successfully:", response);
    return response;
  } catch (error) {
    console.error("Error registering master user:", error);
    throw error;
  }
};

export const loginMasterUser = async (credentials: any) => {
  try {
    const response = await api.post("/login", credentials);
    console.log("Master user logged in successfully:", response);
    return response;
  } catch (error) {
    console.error("Error logging in master user:", error);
    throw error;
  }
};

export const getMasterUser = async (userId: string) => {
  try {
    const response = await api.get(`/get/${userId}`);
    console.log("Fetched master user successfully:", response);
    if (response.status !== 200) {
      throw new Error(`Error fetching master user: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error("Error fetching master user:", error);
    throw error;
  }
};