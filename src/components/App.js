/** @format */

import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import styles from "./App.module.css";
import ContactList from "./contactsList/ContactList";


export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  addContact = (newContactData) => {
    console.log(newContactData);
    const contactToAdd = {
      ...newContactData
    };
    
    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd]
    }));
  };

  deleteContact = id => {
    this.setState(state => ({
       contacts: state.contacts.filter(contact => contact.id !==id)
    }))
  }
 

  render() {
    return (
      <div>
        <h1 className={styles.headerPhone}>Phonebook</h1>
        <ContactForm onItemAdded={this.addContact} />

        <h2 className={styles.headerPhone}>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={this.state.contacts} onItemDeleted={this.deleteContact}/>
      </div>
    );
  }
}
