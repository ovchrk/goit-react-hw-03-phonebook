import React from 'react';
import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label className={css.box}>
    Find contacts by name:
    <input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={value}
      onChange={onChange}
      className={css.input}
    />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
