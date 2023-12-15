// import { nanoid } from "nanoid"
import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContact, fetchContacts } from "./operations";

const handlePending = state => {
    state.contacts.isLoading = true;
  };
  
const handleRejected = (state, action) => {
    state.contacts.isLoading = false;
    state.contacts.error = action.payload;
  };

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null
    }
},
reducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
        state.contacts.isLoading = false;
        state.contacts.error = null;

        const { contacts } = state;
        const { payload } = action;
        const isDuplicate = contacts.items.some(contact =>
            contact.name.toLowerCase() === payload.name.toLowerCase() &&
            contact.number === payload.number
            );
            if(isDuplicate){
                alert('This contact is already in your phonebook!');
            }else{
                state.contacts.items = [...state.contacts.items, action.payload];
            }
        // }, prepare(newContact) {
        //     return {
        //         payload: {
        //             ...newContact,
        //             id: nanoid(),
        //         }
        //     }
        },
      [addContacts.rejected]: handleRejected,
      [deleteContact.pending]: handlePending,
      [deleteContact.fulfilled](state, action) {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
      },
      [deleteContact.rejected]: handleRejected,
    }
}
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //             const { contacts } = state;
    //             const { payload } = action;

    //             const isDuplicate = contacts.items.some(contact =>
    //                 contact.name.toLowerCase() === payload.name.toLowerCase() &&
    //                 contact.number === payload.number
    //             );
    //              if(isDuplicate){
    //                 alert('This contact is already in your phonebook!');
    //              }else{
    //                 state.contacts.items = [...state.contacts.items, action.payload];
    //              }
    //     }, prepare(newContact) {
    //         return {
    //           payload: {
    //             ...newContact,
    //             id: nanoid(),
    //           }
    //         }
    //     }
    //     },
    //     deleteContacts (state, action) {
    //         state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
    //     }
    // }
)

export const contactsReducer = contactSlice.reducer;