import { Input, Label } from "components/Phonebook/Phonebook.styled";
import PropTypes from 'prop-types';

export const Filter = ({updateFilter, filter}) => {
    return <>
        <Label>Find contacts by name</Label>
        <Input onChange={updateFilter} type="search" name="filter" value={filter}></Input>
    </>
}

Filter.propTypes = {
    updateFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}