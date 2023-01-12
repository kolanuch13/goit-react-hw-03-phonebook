import React from "react"
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({list, deleteContact}) => (
    <ul className={css.contactList}>
        { list.map(contact => {
            let markup = <li key={contact.id} className={css.contactItem}>
                <span>{contact.name}: {contact.number}</span>
                <button type="button" onClick={deleteContact} id={contact.id} className={css.contactButton}>Delete</button>
            </li>
            return markup;
            })
        }
    </ul>
)

ContactList.propTypes = {
    list: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactList;
