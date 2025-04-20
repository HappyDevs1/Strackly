import axios from "axios";
import { IP_ADDRESS } from "../utils/config";

const API_BASE_URL = `http://${IP_ADDRESS}:3000/api/transaction`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createTransaction = async (transactionData: any, orgId: string, employeeId: any, itemId: any) => {
  try {
    const response = await api.post(`/create/${orgId}/${employeeId}/${itemId}`, transactionData);
    console.log("Transaction created successfully:", response.data);
    return response;
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
}

export const getAllTransactions = async (orgId: string) => {
  try {
    const response = await api.get(`/transactions/${orgId}`);
    console.log("Fetched all transactions successfully:", response.data);
    if (response.status !== 200) {
      throw new Error(`Error fetching transactions: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}

export const getTransactionByType = async ({paymentType}: any, organisationId: any) => {
  try {
    const response = await api.get(`/transactions/${organisationId}/${paymentType}`);
    console.log("Fetched transaction by payment type successfully:", response.data)
    if (response.status !== 200) {
      throw new Error(`Error fetching transactions: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.error("Error fetching transaction by payment type:", error);
    throw error;
  }
}