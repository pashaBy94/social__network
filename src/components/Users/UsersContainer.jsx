import React from "react";
import Users from "./UsersC";
import { connect } from "react-redux";
import { thunkAddUsers, thunkAddNextUsers, thunkAddFollow, thunkUnFollow } from "../../redux/thankCreator";
import { setCurrentPage } from "../../redux/usersPageReducer";
import Preloader from "../general/Preloader/Preloader";
import { compose } from "redux";
import { authUs } from "../../hot/authUs";
import { getCountPage, getCountUsersPage, getIsDisabledFollowButton, getIsLoader, getNumberCurrentPage, getTotalCountPage, getUsers } from "../../redux/selectors";

class UsersContainer extends React.Component {
    constructor(props){
        super(props);
        this.setAjaxAndWriteUser = this.setAjaxAndWriteUser.bind(this);
    }
    componentDidMount(){
        this.props.thunkAddUsers(this.props.countUsersPage, this.props.totalCountPage, this.props.numberCurrentPage);
    }
    setAjaxAndWriteUser(numPage){
        this.props.thunkAddNextUsers(numPage, this.props.countUsersPage);
    }
    render(){
        return (
        <>  {this.props.isLoader?<Preloader />:null}
            <Users 
                countPage = {this.props.countPage}
                numberCurrentPage = {this.props.numberCurrentPage}
                setAjaxAndWriteUser = {this.setAjaxAndWriteUser}
                users = {this.props.users}
                isDisabledFollowButton = {this.props.isDisabledFollowButton}
                thunkAddFollow = {this.props.thunkAddFollow}
                thunkUnFollow = {this.props.thunkUnFollow}
            />
        </>)
}
}

function mapStateToProps(state){
    return{
        users: getUsers(state),
        numberCurrentPage: getNumberCurrentPage(state),
        countUsersPage: getCountUsersPage(state),
        totalCountPage: getTotalCountPage(state),
        countPage: getCountPage(state),
        isLoader: getIsLoader(state),
        isDisabledFollowButton: getIsDisabledFollowButton(state)
    }
}
export default compose(connect(mapStateToProps, {setCurrentPage, thunkAddUsers, thunkAddNextUsers, thunkAddFollow, thunkUnFollow}), authUs)(UsersContainer) 
