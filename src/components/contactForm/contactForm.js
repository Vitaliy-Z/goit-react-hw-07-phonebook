import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import './contactForm.css';

function ContactForm({ onFormSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const newId = uuidv4();

    onFormSubmit({ name, number, id: newId });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Name
        <input
          className="input inputName"
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="label">
        Number
        <input
          className="input"
          name="number"
          type="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>

      <button className="btnAdd" type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default ContactForm;
