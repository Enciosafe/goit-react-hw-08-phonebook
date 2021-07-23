import React, {Component} from 'react';
import s from "./Registration.module.css"
import {connect} from "react-redux";
import {authOperations} from "../../redux/auth";
import Button from '@material-ui/core/Button';
import {TextField} from "@material-ui/core";



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
                    <h1 className={s.registration}>REGISTRATION</h1>
                    <form onSubmit={this.handleSubmit}
                          autoComplete='off'
                          className={s.containerForm}
                    >
                        <TextField
                            id="standard-basic"
                            label="name"
                            type="name"
                            name="name"
                            value={name}
                            onChange={this.handleChange} >
                        </TextField>
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
                        <Button className={s.button} type={"submit"}>registration</Button>
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