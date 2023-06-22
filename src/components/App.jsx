import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import { Container } from './Container';
import { Form } from './Form';
import { Filter } from './Filter';
import { List } from './List';

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  
  }
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
    
  }
  
  addContact = (contact) => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    }
    
    const inList = this.state.contacts.some(contact => contact.name === newContact.name);

    if (inList) {
      alert(`${newContact.name} is already in your list`);
      return; 
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts, ]
    }))
  }

  filterOnChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = (idToDelete) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== idToDelete)
    }))
  }

  render() {
    const { contacts, filter } = this.state
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
       <Container>
          <h1>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.filterOnChange} ></Filter>
        <List filteredContacts={filteredContacts} handleDelete={this.deleteContact}></List>
    </Container> 
  );
  }
 
};
export { App };