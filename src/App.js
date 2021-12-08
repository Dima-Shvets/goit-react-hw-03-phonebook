import { Component } from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';
import { nanoid } from 'nanoid';
import './common-style.scss';
import './App.scss';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const check = contacts.find(contact => contact.name === name);

    if (check) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    const { contacts } = this.state;

    const updatedContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: [...updatedContacts],
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  updateFilter = message => {
    this.setState({
      filter: message,
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} updateFilter={this.updateFilter} />
        <ContactList
          filteredContacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
