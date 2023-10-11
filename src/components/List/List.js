import React from 'react';
import css from '../List/List.module.css';
import PropTypes from 'prop-types';

export const List = ({ filteredContacts, handleDelete }) => {
  return (
    <div>
      {filteredContacts.length > 0 ? (
        <ul className={css.box}>
          {filteredContacts.map(({ id, name, number, gender }) => (
            <li key={id} className={css.contacts__item}>
              &#8728; {name}: {number}{' '}
              {gender && <span className={css.gender}>({gender})</span>}
              <button
                type="button"
                className={css.button}
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.box}>Contacts not found</div>
      )}
    </div>
  );
};
List.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
