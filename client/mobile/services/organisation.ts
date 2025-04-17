import axios from "axios";
import { IP_ADDRESS } from "../utils/config";

const API_BASE_URL = `http://${IP_ADDRESS}:3000/api/organisation`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createOrganisation = async (orgData: any, masId: string) => {
  try {
    const response = await api.post(`/create/${masId}`, orgData);
    console.log("Organisation created successfully:", response);
    return response;
  } catch (error) {
    console.error("Error creating organisation:", error);
    throw error;
  }
};

export const getOrganisation = async (orgId: string) => {
  try {
    const response = await api.get(`/get/${orgId}`);
    console.log("Fetched organisation successfully:", response);
    if (response.status !== 200) {
      throw new Error(`Error fetching organisation: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error("Error fetching organisation:", error);
    throw error;
  }
};