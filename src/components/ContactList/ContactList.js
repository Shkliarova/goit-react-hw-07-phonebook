import { selectFilteredContacts } from "../../redux/selectors";
import { ContactsList, DeleteButton } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operations";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    return(
        <ContactsList>
            {contacts.map(item => 
            <li key={item.id}>
                {item.name}: <i>{item.number}</i>
                <DeleteButton onClick={()=>dispatch(deleteContact(item.id))}>delete</DeleteButton>
            </li>)}
        </ContactsList>
    )
}