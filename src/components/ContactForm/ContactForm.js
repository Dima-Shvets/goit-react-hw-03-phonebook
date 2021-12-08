import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.scss';

const nameInputId = nanoid();
const numberInputId = nanoid();

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputHandler = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s['contact-form']} onSubmit={this.submitHandler}>
        <label htmlFor={nameInputId} className={s['name-label']}>
          Name
        </label>
        <input
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.inputHandler}
        />
        <label htmlFor={numberInputId} className={s['number-label']}>
          Number
        </label>
        <input
          id={numberInputId}
          className={s['number-input']}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.inputHandler}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
