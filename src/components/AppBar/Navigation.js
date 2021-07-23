import React from 'react';
import s from "./AppBar.module.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {authSelectors} from "../../redux/auth";
import Button from '@material-ui/core/Button';



const Navigation = ({isAuthenticated}) => {
    return (
        <div className={s.leftContainer}>
            <Button>
                <NavLink to={'/home'} className={s.item}>Home</NavLink>
            </Button>
            {/*{isAuthenticated && <NavLink to={'/contacts'} className={s.item} activeStyle={activeStyles.activeLink}>Phonebook</NavLink>}*/}
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(Navigation);