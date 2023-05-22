import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authUserThank, logoutThank } from "../../redux/thankCreator";
import { setAuthUser, setProfile } from "../../redux/authUserReducer";
import { getAuthenticationUser, getIsAuth, getProfile } from "../../redux/selectors";

class HeaderContainer extends React.Component{
    render(){
        const props = this.props;
        return(<Header 
            user={props.authenticationObj} 
            isAuth={props.isAuth} 
            profile={props.profile}
            logoutThank={props.logoutThank}/>)
    }
}
const mapStateToProp = state => ({
        authenticationObj: getAuthenticationUser(state),
        isAuth: getIsAuth(state),
        profile: getProfile(state),
    });

export default connect(mapStateToProp, {setAuthUser, setProfile, authUserThank, logoutThank})(HeaderContainer)