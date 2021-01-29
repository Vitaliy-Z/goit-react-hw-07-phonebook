import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "redux/contacts";
import "./contactList.css";

function ContactList() {
  const allContacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filterItems = (allContactsItem, filterItem) => {
    return allContactsItem.filter((contact) =>
      contact.name.toLowerCase().includes(filterItem.toLowerCase())
    );
  };

  const contacts = filterItems(allContacts, filter);

  return (
    <ul className="contact-list">
      {contacts.length === 0 ? (
        <p className="contact-item__text">
          There are no contacts on your list yet
        </p>
      ) : (
        contacts.map((item) => (
          <li className="contact-item" key={item.id}>
            <p className="contact-item__text">
              {item.name} :
              <span className="contact-item__number">{item.number}</span>
            </p>
            <button
              className="btnDelete"
              type="button"
              onClick={() =>
                dispatch(contactsOperations.deleteContact(item.id))
              }
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default ContactList;
