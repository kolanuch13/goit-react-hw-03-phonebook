import { Component } from "react";
import css from './ContactForm.module.css';

class ContactForm extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            number: "",
        }
    }
  
    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    reset() {
        this.setState  ({
            name: "",
            number: "",
        })
    }

    render() {
        const { name, number } = this.state;

        return <div>
            <form action="" onSubmit={this.handleSubmit} className={css.contactForm}>
                <label htmlFor={this.loginInputId} className={css.contactLabel}>
                    Name
                    <input
                        type="text"
                        name="name"
                        id={this.loginInputId}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={name}
                        required
                        className={css.contactInput}
                    />
                </label>
                <label htmlFor={this.loginInputId} className={css.contactLabel}>
                    Number
                    <input
                        type="text"
                        name="number"
                        id={this.loginInputId}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={number}
                        required
                        className={css.contactInput}
                    />
                </label>
                <button type="submit" className={css.contactButton}>Add contact</button>
            </form>
        </div>  

    }
}

export default ContactForm;
