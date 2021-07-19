import React from 'react';
import s from "./AppBar.module.css";
import {NavLink} from "react-router-dom";

const activeStyles = {
    activeLink: {
        color: '#E84A5F'
    }
}

const AuthNav = () => {
    return (
        <div className={s.rightContainer}>
            <NavLink to={'/registration'} className={s.item} activeStyle={activeStyles.activeLink}>Registration</NavLink>
            <NavLink to={'/login'} className={s.item} activeStyle={activeStyles.activeLink}>Authentication</NavLink>
        </div>
    );
};

export default AuthNav;