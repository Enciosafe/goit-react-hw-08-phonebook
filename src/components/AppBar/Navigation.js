import React from 'react';
import s from "./AppBar.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {authSelectors} from "../../redux/auth";


const activeStyles = {
    activeLink: {
        color: '#E84A5F'
    }
}

const Navigation = ({isAuthenticated}) => {
    return (
        <div className={s.leftContainer}>
            <NavLink to={'/home'} className={s.item} activeStyle={activeStyles.activeLink}>Home</NavLink>
            {isAuthenticated && <NavLink to={'/Phonebook'} className={s.item} activeStyle={activeStyles.activeLink}>Phonebook</NavLink>}
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(Navigation);