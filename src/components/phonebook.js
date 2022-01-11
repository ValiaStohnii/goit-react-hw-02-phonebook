import React from 'react';
import Form from './Form';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter';

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  contactId = nanoid();

  formSubmit = data => {
    console.log(data.name);
    console.log(data.number);

    const contact = {
      id: this.contactId,
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts } = this.state;
  };

  render() {
    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(c =>
      c.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}

export default Phonebook;
