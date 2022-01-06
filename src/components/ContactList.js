import React from 'react';

const ContactList = ({ name, number }) => {
  return (
    <ul>
      <li>
        <p name="" id="">
          {name}:{number}
        </p>
      </li>
    </ul>
  );
};

export default ContactList;
