import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { loginThank, logoutThank } from "../../redux/thankCreator";
import { Navigate} from "react-router-dom";
import { getIsAuth } from "../../redux/selectors";

class LoginContainer extends React.Component{
    render(){
        if(this.props.isAuth) return <Navigate replace to="/profile" /> 
        return(<Login loginThank={this.props.loginThank} />)
    }
}
const mapStateToProps = state =>({
        isAuth: getIsAuth(state),
    });

export default connect(mapStateToProps,  {loginThank, logoutThank})(LoginContainer)