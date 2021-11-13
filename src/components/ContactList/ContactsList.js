import React from "react";
import styles from "./ContactList.module.scss"
import {connect, useDispatch} from "react-redux";
import {deleteContactItem} from "../../redux/Contacts/ContactsAction";


const ContactsList = ({contacts}) => {

  const dispatch = useDispatch()
  const deleteContact = id => dispatch(deleteContactItem(id))


  return (
    <ul className={styles.contact_list}>
      {contacts.map(({id, name, number}) => {
        return (
          <li key={id}><span className={styles.name}>{name}:</span><span
            className={styles.number}>{number}</span>
            <button type="button" name="delete" onClick={() => deleteContact(id)}>Delete</button>
          </li>
        )
      })}

    </ul>

  )
}


const mapStateToProps = state => {
  const {contactsReducer, changeFilter} = state.contacts
  const normalizeFilter = changeFilter.toLowerCase()
  let filteredItems = []
  if (contactsReducer.length > 0) {
    filteredItems = contactsReducer.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
  }
  return {
    contacts: filteredItems
  }
}

export default connect(mapStateToProps, null)(ContactsList)


