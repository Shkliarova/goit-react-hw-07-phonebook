import {Formik} from "formik"
import * as Yup from 'yup';
import { ContactsForm, ContactsField, FormButton, FormError } from "./ContactForm.styled";
import { useDispatch } from "react-redux"
import { addContacts } from "../../redux/operations";

const contactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    phone: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/g, 'Number format: xxx-xxx-xxxx')
    .required('Required')
})

export const ContactForm = () => {
    const dispatch = useDispatch();

    return(
        <Formik initialValues={{
            name: '',
            phone: ''
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
            dispatch(addContacts(values));
            actions.resetForm();
        }}>
            <ContactsForm>
                <label>
                    Name
                    <ContactsField type="text" name="name" required /><br/>
                </label>
                <label>
                    Number
                    <ContactsField type="tel" name="phone" placeholder="xxx-xxx-xxxx" required /><br/>
                    <FormError name="phone" component="span"/>
                </label>

                <FormButton type="submit">Add contact</FormButton>
            </ContactsForm>
        </Formik>
    )
}