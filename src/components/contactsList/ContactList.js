import React from "react";
import styles from "./ContactList.module.css";
import ContactListItem from "../contactListItem/ContactListItem";

const ContactList = ({ contacts }) =>
  contacts.length >= 2 && (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <ContactListItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );

export default ContactList;
