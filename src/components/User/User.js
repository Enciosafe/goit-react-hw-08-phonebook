import React from 'react';
import s from './User.module.css'
import {connect} from "react-redux";
import {authSelectors, authOperations} from '../../redux/auth'
import defaultAvatar from './cristiano-ronaldo-icon.png'



const User = ({avatar, name, onLogout}) => {
    return (
        <div className={s.container}>
            <img className={s.avatar} src={avatar} alt={name}/>
            <span>Welcome, {name}!</span>
            <button type='button' onClick={onLogout}>Logout</button>
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