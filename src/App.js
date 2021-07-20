import React, {Component, Suspense, lazy} from "react";
import s from "./App.module.css"
import {Switch} from 'react-router-dom'
import AppBar from "./components/AppBar/AppBar";
import {authOperations} from "./redux/auth";
import {connect} from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";


const Home = lazy(() => import('./components/Home/Home'))
const Registration = lazy(() => import('./components/Registration/Registration'))
const Login = lazy(() => import('./components/Login/Login'))
const Phonebook = lazy(() => import('./components/PhoneBook/Phonebook'))



class App extends Component {

    componentDidMount() {
        this.props.onGetCurrentUser()
    }


    render () {
        return <>
            <div className={s.container}>
                <AppBar/>
            </div>
            <Suspense fallback={<p>...Loading</p>}>
                <Switch>
                    <PublicRoute exact path={'/home'} component={Home}/>
                    <PublicRoute path={'/registration'} restricted redirectTo='/contacts' component={Registration} />
                    <PublicRoute path={'/login'} restricted redirectTo='/contacts' component={Login} />
                    <PrivateRoute path={'/contacts'} component={Phonebook} redirectTo='/login' />
                </Switch>
            </Suspense>
        </>
    }
};

const mapDispatchToProps = {
    onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);





