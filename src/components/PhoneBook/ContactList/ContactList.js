import React from "react";
import {connect} from "react-redux";
import {contactsOperations, contactsSelectors} from '../../../redux/contacts'
import s from "./ContactList.module.css"
import {Button, List, ListItem} from "@material-ui/core";




const ContactList = ({contacts, handlerDel}) => {
    return <div className={contacts.length > 0 ? s.list: null}>
        <List>
            {contacts.map(({ name, number, id }) => (
                <ListItem className={s.listItem} key={id}>{name}: {number}
                    <Button className={s.button} onClick={() => handlerDel(id)} type="submit" id={id}>delete</Button>
                </ListItem>
            ))}
        </List>
    </div>
}


const mapStateToProps = (state) => ({
 contacts: contactsSelectors.getVisibleContacts(state)
})

const mapDispatchToProps = dispatch => ({
    handlerDel: (id) => dispatch(contactsOperations.delContact(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)