import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const BASE_URL = "http://localhost:8080/api/contacts";

export const useContactsApi = () => {
  const { getToken } = useAuth();

  const getHeaders = async () => {
    const token = await getToken();
    return { Authorization: `Bearer ${token}` };
  };

  const getAllContacts = async () => {
    const res = await axios.get(`${BASE_URL}/show`, {
      headers: await getHeaders(),
    });
    return res.data;
  };

  const createContact = async (data) => {
    const res = await axios.post(`${BASE_URL}/add`, data, {
      headers: await getHeaders(),
    });
    return res.data;
  };

  const updateContact = async (id, data) => {
    const res = await axios.put(`${BASE_URL}/update/${id}`, data, {
      headers: await getHeaders(),
    });
    return res.data;
  };

  const deleteContact = async (id) => {
    const res = await axios.delete(`${BASE_URL}/delete/${id}`, {
      headers: await getHeaders(),
    });
    return res.data;
  };

  const searchContactsByName = async (name) => {
    const res = await axios.get(`${BASE_URL}/search/${name}`, {
      headers: await getHeaders(),
    });
    return res.data;
  };

  const getContactById = async (id) => {
    const res = await axios.get(`${BASE_URL}/show/${id}`, {
      headers: await getHeaders(),
    });
    return res.data;
  };

  return {
    getAllContacts,
    createContact,
    updateContact,
    deleteContact,
    searchContactsByName,
    getContactById,
  };
};