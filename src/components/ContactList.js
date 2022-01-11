import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contacts => (
        <li id={contacts.id} name={contacts.name}>
          {contacts.name} {contacts.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
