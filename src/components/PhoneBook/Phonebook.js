
import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {contactsOperations} from "../../redux/contacts";
import {contactsSelectors} from "../../redux/contacts";
import s from "./Phonebook.module.css"


class Phonebook extends React.Component {


    componentDidMount() {
        this.props.fetchContacts()
    }

    render()
    {
        return <>
            <div className={s.container}>
                <div className={s.itemLeft}>
                    <h1 className={s.Phonebook}>📞 Phonebook</h1>
                    <ContactForm contacts={this.props.contacts}/>
                </div>
                <div className={s.item}>
                    <div>
                        <h1 className={s.Phonebook}>Contacts️</h1>
                        <ContactList/>
                    </div>
                </div>
                <div className={s.itemRight}>
                    <div>
                        <h1 className={s.Phonebook}>Filter ️👀</h1>
                        {this.props.contacts.length === 0 && <span className={s.Phonebook}>you don't have any contact ☹️</span>}
                        {this.props.contacts.length > 1 && <Filter/>}
                    </div>

                </div>
            </div>
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







