import React from "react";
import { getTopFriends } from "../../redux/selectors";
import Friends from "./Friends";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "../../utils/helpers";

function FriendsContainer({topFriends}){
    return(
        <Friends topFriends={topFriends}/>
    )
}

const mapStateToProps = state => ({
  topFriends: getTopFriends(state)
});

export default compose(
  connect(mapStateToProps,{}),
  withRouter
  )(FriendsContainer)