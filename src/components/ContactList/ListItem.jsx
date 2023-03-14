import { ListItem } from "./ContactList.styled"
import { DeleteButton } from "./DeleteButton";
import PropTypes from 'prop-types';

export const ContactListItem = ({ contact, deleteContact }) => {
    return <ListItem>{contact.name}: {contact.number}
                <DeleteButton value={contact.id} deleteContact={deleteContact}></DeleteButton>
            </ListItem>
}

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }),
    deleteContact: PropTypes.func.isRequired,
}