import React, { Component } from "react";
import styles from "./ContactForm.module.css";
// import shortid from 'shortid';


export default class ContactForm extends Component {
  // newContactId = shortid.generate();
  maxId = 100;

  state = {
    id: "",
    name: "",
    number: "",
  };

  handlerChangeInput = e => {
    // console.log("name", e.target.name);
    // console.log("value", e.target.value);
      this.setState({
        id: this.maxId ++,
      [e.target.name]: e.target.value
    })

  }

  handlerSubmitForm = e => {
    this.props.onItemAdded({ ...this.state});
    e.preventDefault();
    this.reset();
  };

  reset = () => {
    this.setState({
      id: "",
      name: "",
      number: "",
      })
  }

  render() {
    const {name, number} = this.state;
    return (
      <div className={styles.containetForm}>
        <form className={styles.phoneForm} onSubmit={this.handlerSubmitForm}>
          <label className={styles.phoneHeader}>
            Name
            <input
              className={styles.inputForm}
              onChange={this.handlerChangeInput}
              type="text"
              name="name"
              value={name}
            ></input>
          </label>
          <label className={styles.phoneHeader}> Number </label>
          <input
            className={styles.inputForm}
            onChange={this.handlerChangeInput}
            type="text"
            name="number"
            value={number}
          ></input>
          <button className={styles.buttonForm} type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
