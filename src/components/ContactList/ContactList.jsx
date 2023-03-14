import { Component } from "react";
import { Container, ContactsList } from "./ContactList.styled";
import { ContactListItem } from "./ListItem";
import PropTypes from 'prop-types';

export class ContactList extends Component {
    render() {
        const { deleteContact, contacts } = this.props;
        return <Container>
            <ContactsList>
                {contacts.map((contact) => {
                   return <ContactListItem key={ contact.id } contact={contact} deleteContact={deleteContact} />
                })}
            </ContactsList>
        </Container>
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            })),
    deleteContact: PropTypes.func.isRequired,
        
}
