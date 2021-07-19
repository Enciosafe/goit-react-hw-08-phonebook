import React, {Component} from 'react';
import s from "./Registration.module.css"
import {connect} from "react-redux";
import {authOperations} from "../../redux/auth";


class Registration extends Component  {

    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({ [name]: value} );
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.onRegister(this.state);

        this.setState({name: '', email: '', password: ''})
    }


    render () {
        const {email, password, name} = this.state

        return (
            <div  className={s.container}>
                <div>
                    <h1>REGISTRATION</h1>
                    <form onSubmit={this.handleSubmit}
                          autoComplete='off'
                          className={s.containerForm}
                    >

                        <label className={s.item}>
                            Name
                            <input type="name"
                                   name='name'
                                   value={name}
                                   onChange={this.handleChange}
                            />
                        </label>

                        <label className={s.item}>
                            Email
                            <input type="email"
                                   name='email'
                                   value={email}
                                   onChange={this.handleChange}
                            />
                        </label>

                        <label className={s.item}>
                            Password
                            <input type="password"
                                   name='password'
                                   value={password}
                                   onChange={this.handleChange}
                            />
                        </label>

                        <button type={"submit"}>registration</button>
                    </form>
                </div>
            </div>
        );
    }

};


// const mapDispatchToProps = dispatch => ({
//     onSubmit: (data) => dispatch(authOperations.register(data))
// })


const mapDispatchToProps = ({
    onRegister: authOperations.register,
})


export default connect(null, mapDispatchToProps)(Registration);