import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.filteredContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.element}>
              {name}: {number}
              <button
                className={s.button}
                type="button"
                onClick={() => this.props.deleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
