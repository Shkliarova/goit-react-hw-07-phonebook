import { selectContacts, selectError, selectIsLoading } from "../../redux/selectors"
import { ContactForm } from "../ContactForm/ContactForm"
import { ContactList } from "../ContactList/ContactList"
import { Filter } from "../Filter/Filter"
import { AppWrapper } from "./App.styled"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations"

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return(
      <AppWrapper>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {contacts.length > 0 && <ContactList />}
      </AppWrapper>
    )
  }