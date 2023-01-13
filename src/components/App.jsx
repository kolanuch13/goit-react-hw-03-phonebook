import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";


class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          name: "Harry Potter",
          number: "+11111111",
          id: "id-1",
        },
        {
          name: "Ron Weasley",
          number: "+2222222",
          id: "id-2",
        },
        {
          name: "Hermione Ganger",
          number: "+333333",
          id: "id-3",
        },
        {
          name: "Albus Dumbledore",
          number: "+4444444",
          id: "id-4",
        }
      ],
      filter: "",
    }
  }
  
  formSubmitHandler = data => {
    data.id = nanoid();
    let current = this.state.contacts;

    const myContacts = current.filter(contact => contact.name === data.name);
    
    if (myContacts.length) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  }

  changeFilter = evt => {
    this.setState({filter: evt.target.value.toLowerCase()});
  }

  deleteContact = evt => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== evt.target.id),
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({contacts: parseContacts})
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: "column"
        }}
      >
        <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />

          <h2>Contacts</h2>
          <Filter
            value={filter}
            onChange={this.changeFilter}
          />
        <ContactList list={filteredContacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
};

export default App;