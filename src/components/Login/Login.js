import React, {Component} from 'react';
import {connect} from "react-redux";
import {authOperations} from "../../redux/auth";
import {Button, TextField} from "@material-ui/core";
import s from "./Login.module.css"


class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({ [name]: value} );
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.onLogin(this.state)

        this.setState({name: '', email: '', password: ''})
    }


    render() {
        const {email, password} = this.state

        return (
            <div className={s.container}>

                <div>
                    <h1 className={s.login}>LOGIN FORM</h1>
                    <form onSubmit={this.handleSubmit}
                          autoComplete='off' className={s.containerForm}>
                        <TextField
                            id="standard-basic"
                            label="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange} >
                        </TextField>
                        <TextField
                            id="standard-basic"
                            label="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange} >
                        </TextField>
                        <Button className={s.button} type={"submit"}>SignIN</Button>
                    </form>
                </div>


            </div>
        );
    }

};


const mapDispatchToProps = ({
    onLogin: authOperations.logIn
})

export default connect(null, mapDispatchToProps)(Login);