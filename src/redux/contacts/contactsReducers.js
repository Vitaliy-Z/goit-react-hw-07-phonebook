import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOperation";
import { filterChange } from "./contactsActions";

// 🔥 ИСПОЛЬЗУЕТ ДЛЯ IMMER
// import { createSlice, createReducer } from "@reduxjs/toolkit";

const contactsItem = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
});

const contactsReducer = combineReducers({
  contactsItem,
  isLoading,
  error,
});

const filterReducer = createReducer("", {
  [filterChange]: (_, action) => action.payload,
});

// 🔥 ИСПОЛЬЗУЕТ IMMER ДЛЯ МУТАЦИИ КОПИИ СОСТОЯНИЯ

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: { contactsItem: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, { payload }) =>
//       (state.contactsItem = payload),
//     [addContact.fulfilled]: (state, action) => state.push(action.payload),
//     [deleteContact.fulfilled]: (state, action) =>
//       state.filter(({ id }) => id !== action.payload),

//     [fetchContacts.pending]: (state) => (state.isLoading = true),
//     [addContact.pending]: (state) => (state.isLoading = true),
//     [deleteContact.pending]: (state) => (state.isLoading = true),

//     [fetchContacts.rejected]: (state, action) => (state.error = action.payload),
//     [addContact.rejected]: (state, action) => (state.error = action.payload),
//     [deleteContact.rejected]: (state, action) => (state.error = action.payload),
//   },
// });

// const contactsReducer = contactsSlice.reducer;

export { contactsReducer, filterReducer };
