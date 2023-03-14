import { Component } from 'react';
import { FormStyle, Label, Input, SubmitBtn } from './Phonebook.styled';
import PropTypes from 'prop-types';


export class PhonebookForm extends Component {
    state = {
        name: '',
        number: ''
    }

     handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        });
     };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContacts({ ...this.state });
        this.setState({
            name: "",
            number: "",
        })
    }
    
    render() {
        return (
            <FormStyle onSubmit={this.handleSubmit}>
        <div>
          <Label>Name</Label>
            <Input onChange={this.handleChange}
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required  
            />
          <Label>Number</Label>
            <Input onChange={this.handleChange}
              type="tel"
              value={this.state.number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
                    />
            <SubmitBtn type="submit">Add contact</SubmitBtn>
        </div>
            </FormStyle>
        )
    }
}

PhonebookForm.propTypes = {
   addContacts: PropTypes.func.isRequired,
}
