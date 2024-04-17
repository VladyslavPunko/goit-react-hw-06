import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const conttactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE.contacts,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = conttactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = conttactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
