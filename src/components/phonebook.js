import React from 'react';
import Form from './Form';
import ContactList from './ContactList';

class Phonebook extends React.Component {
  state = {
    contacts: [],
  };

  formSubmit = data => {
    console.log(data.name);
    console.log(data.number);
    this.setState(() => {
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
        <ContactList name={this.state.contacts.name} number={this.state.contacts.number} />
      </div>
    );
  }
}

export default Phonebook;
