import React from "react";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ contact }) => {

  const { name, number } = contact;
  return (
      <li className={styles.item}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
        <button className={styles.buttonForm} type="submit">Delete</button>
      </li>
  );
};

export default ContactListItem;
