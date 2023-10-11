import React, { Component } from 'react';
import css from '../Form/Form.module.css';
import PropTypes from 'prop-types';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

class Form extends Component {
  state = {
    name: '',
    number: '',
    gender: null,
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    this.setState({ gender: null });
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number, gender } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
          Name: <br></br>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="true"
          />
        </label>
        <label className={css.label}>
          Number: <br></br>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <section>
          Gender: <br></br>
          <label className={css.gender__label}>
            Male
            <input
              className={css.gender__input}
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label className={css.gender__label}>
            Female
            <input
              className={css.gender__input}
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>
        <button type="submit" className={css.submit} disabled={!gender}>
          Add contact
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export { Form };
