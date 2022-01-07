import React from 'react';
import { nanoid } from 'nanoid';

const ContactList = ({ name, number }) => {
  const contactId = nanoid();
  return (
    <ul>
      <li>
        <p name={name} id={contactId}>
          {name}: {number}
        </p>
      </li>
    </ul>
  );
};

export default ContactList;
