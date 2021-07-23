import React from "react";
import {connect} from "react-redux";
import contactsActions from '../../../redux/contacts/contacts-actions'
import {contactsSelectors} from '../../../redux/contacts'
import s from "./Filter.module.css"
import {TextField} from "@material-ui/core";


const Filter = ({handlerFilter, filter}) => {
    return <>
        <p className={s.text}>Find contacts by name:</p>
        <TextField
            id="standard-basic"
            label="search"
            type="text"
            name="filter"
            value={filter}
            onChange={handlerFilter} >
        </TextField>
    </>

}

const mapStateToProps = state => ({
    filter: contactsSelectors.getFilter(state)
})
const mapDispatchToProps = dispatch => ({
    handlerFilter: (e) => dispatch(contactsActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)