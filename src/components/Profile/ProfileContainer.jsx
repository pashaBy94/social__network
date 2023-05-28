import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setCurrentProfileThunk, setCurrentStatusThunk, getCurrentStatusThunk } from "../../redux/thankCreator";
import { setCurrentProfile } from "../../redux/profilePageReducer";
import { withRouter } from "../../utils/helpers";
import { compose } from "redux";
import Preloader from "../general/Preloader/Preloader";
import { getCurrentStatus, getAuthenticationId, getSuperCurrentProfile } from "../../redux/selectors";

class ProfileContainer extends React.Component{
    componentDidMount(){
        let usId = this.props.router.params.usId;
        if(!usId) usId = this.props.authenticationId;
        this.props.setCurrentProfileThunk(usId);
        this.props.getCurrentStatusThunk(usId);
}
    render(){
        if(!this.props.currentProfile) return <Preloader />
        return(<Profile profile={this.props.currentProfile} status={this.props.currentStatus} setCurrentStatusThunk={this.props.setCurrentStatusThunk}/>)
    }    
}

const mapStateToProp = state => ({
        currentProfile: getSuperCurrentProfile(state),
        currentStatus: getCurrentStatus(state),
        authenticationId: getAuthenticationId(state),
    });

export default compose(
    connect(mapStateToProp, {setCurrentProfile, setCurrentProfileThunk, setCurrentStatusThunk, getCurrentStatusThunk}),
    withRouter
)(ProfileContainer)