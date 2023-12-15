// import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contacts.items;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.error;

export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);

    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
        
}