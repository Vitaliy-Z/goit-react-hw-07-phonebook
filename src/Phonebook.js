import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/contactForm/contactForm";
import Filter from "./components/filter/filter";
import ContactList from "./components/contactList/contactList";
import { contactsSelectors } from "./redux/contacts";
import "./Phonebook.css";
import { contactsOperations } from "./redux/contacts";

function Phonebook() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = (data) =>
    contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(data.name + " is already in contacts")
      : dispatch(contactsOperations.addContact(data));

  return (
    <div className="container">
      <h1 className="title">phonebook</h1>
      <ContactForm onFormSubmit={handleFormSubmit} />
      <h2 className="title-contacts">contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default Phonebook;
