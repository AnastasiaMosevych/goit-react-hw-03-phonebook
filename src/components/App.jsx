import { Component } from "react";
import { Title } from "components/Common/Title";
import { ContactList } from "components/ContactList/ContactList";
import { PhonebookForm } from "./Phonebook/Phonebook";
import { Filter } from "./Filter/Filter";
import { Container } from "./ContactList/ContactList.styled";
import nextId from "react-id-generator";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContacts = ({ name, number }) => {
    let contactIsNew = true;
    this.state.contacts.forEach((contact) => {
      if (name.toLowerCase() === contact.name.toLowerCase()) {
        contactIsNew = false;
      }  
    })
    if (contactIsNew === false) {
        return alert(`${name} is already in contacts`)
    } else {
        this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id: nextId() }],
      }))
      }      
  }

  deleteContact = (e) => {
    e.preventDefault();
    let idToRemove = e.target.value;
    let filteredContacts = this.state.contacts.filter((contact) => contact.id !== idToRemove);
    this.setState({
      contacts: filteredContacts,
    })
  }
  
  filterContacts = (contacts, filter) => {
    let filteredContacts = [];
    contacts.forEach((contact) => {
      if (filter === "" || contact.name.toLowerCase().includes(filter.toLowerCase())) {
        filteredContacts.push(contact);
        } 
      })
    return filteredContacts;
  } 

  updateFilter = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <Container>
        <Title title="Phonebook" />
        <PhonebookForm addContacts={this.addContacts} />
        <Title title="Contacts" />
        <Filter updateFilter={this.updateFilter} filter={this.state.filter} />
        <ContactList
          contacts={this.filterContacts(this.state.contacts, this.state.filter)}
          deleteContact={this.deleteContact} />
      </Container>
  );
  }
};

