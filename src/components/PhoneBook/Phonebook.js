
import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {contactsOperations} from "../../redux/contacts";
import {contactsSelectors} from "../../redux/contacts";


class Phonebook extends React.Component {


    componentDidMount() {
        this.props.fetchContacts()
    }

    render()
    {
        return <>
            <h1>Phonebook</h1>
            <ContactForm contacts={this.props.contacts}/>
            <h2>Contacts</h2>
            {this.props.contacts.length > 1 && <Filter/>}
            <ContactList/>
        </>
    }
}

const mapStateToProps = state => ({
    contacts: contactsSelectors.getContacts(state),
    filter: contactsSelectors.getFilter(state),
})


const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactsOperations.fetchContacts())
})


export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);


Phonebook.propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string,
        })
    )
};







