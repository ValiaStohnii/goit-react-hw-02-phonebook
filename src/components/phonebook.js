import React from 'react';
import Form from './Form';

class Phonebook extends React.Component {
  state = {
    contacts: [],
  };

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default Phonebook;
