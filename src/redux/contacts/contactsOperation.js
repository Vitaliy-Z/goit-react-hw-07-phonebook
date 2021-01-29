import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllContactsAPI,
  addContactsAPI,
  deleteContactsAPI,
} from "service-API";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchAllContactsAPI();
      return contacts;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      const response = await addContactsAPI(contact);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await deleteContactsAPI(id);
      return id;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
