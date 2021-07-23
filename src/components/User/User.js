import React from 'react';
import s from './User.module.css'
import {connect} from "react-redux";
import {authSelectors, authOperations} from '../../redux/auth'
import defaultAvatar from './cristiano-ronaldo-icon.png'
import {Button} from "@material-ui/core";



const User = ({avatar, name, onLogout}) => {
    return (
        <div className={s.container}>
            <img className={s.avatar} src={avatar} alt={name}/>
            <span className={s.name}>Welcome, {name}!</span>
            <Button type='button' onClick={onLogout}>Logout</Button>
        </div>
    );
};


const mapStateToProps = (state) => ({
    name: authSelectors.getUserName(state),
    avatar: defaultAvatar
})

const mapDispatchToProps = {
    onLogout: authOperations.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(User);