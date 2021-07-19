import React, {Component} from "react";
import s from "./App.module.css"
import {Switch, Route} from 'react-router-dom'
import AppBar from "./components/AppBar/AppBar";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Phonebook from "./components/PhoneBook/Phonebook";
import {authOperations} from "./redux/auth";
import {connect} from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";



class App extends Component {

    componentDidMount() {
        this.props.onGetCurrentUser()
    }


    render () {
        return <>
            <div className={s.container}>
                <AppBar/>
            </div>

            <Switch>
                <Route path={'/home'} component={Home}/>
                <PublicRoute path={'/registration'} restricted redirectTo='/Phonebook' component={Registration} />
                <PublicRoute path={'/login'} restricted redirectTo='/Phonebook' component={Login} />
                <PrivateRoute path={'/phonebook'} component={Phonebook} redirectTo='/login' />
            </Switch>
        </>
    }
};

const mapDispatchToProps = {
    onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);





