import { DeleteBtn } from './DeleteButton.styled';
import PropTypes from 'prop-types';

export const DeleteButton = ({ deleteContact, value }) => {
    return <>
        <DeleteBtn onClick={ deleteContact } type="button" value={value}>Delete</DeleteBtn>
    </>
}

DeleteButton.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}