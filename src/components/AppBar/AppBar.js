import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import User from "../User/User";
import {connect} from "react-redux";
import {authSelectors} from "../../redux/auth";




const AppBar = ({isAuthenticated}) => {

    return <>
        <Navigation />
        {isAuthenticated ? <User/>: <AuthNav/>}
        </>
}

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(AppBar)