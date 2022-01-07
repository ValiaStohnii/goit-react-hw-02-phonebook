import React from 'react';
import Form from './Form';
import ContactList from './ContactList';

class Phonebook extends React.Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
  };

  formSubmit = data => {
    console.log(data.name);
    console.log(data.number);
    this.setState(data => {
      return {
        contacts: [data.name, data.number],
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <ContactList name={this.state.contacts} number={this.state.contacts} />
      </div>
    );
  }
}

export default Phonebook;
