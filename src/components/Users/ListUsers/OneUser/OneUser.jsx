import React from "react";
import { NavLink } from "react-router-dom";
import st from "./OneUser.module.css"



export default function OneUser({user, isDisabledFollowButton, thunkAddFollow, thunkUnFollow}){


    return (
        <div className={st.users__point}>
                        <div className={st.users__point_imag}>
                            <div className={st.user__wrap}>
                                <NavLink to={`/profile/${user.id}`}><img src={user.photos.small?user.photos.small:'noava.png'} className={st.user__imag}/></NavLink>
                                {user.followed == true? <button className={st.user__followed} disabled={isDisabledFollowButton.includes(user.id)} onClick={
                                    ()=>{
                                        thunkUnFollow(user.id);
                                    }
                                }>Unfollower</button>:<button className={st.user__followed} disabled={isDisabledFollowButton.includes(user.id)} onClick={
                                    ()=>{
                                        thunkAddFollow(user.id)
                                    }
                                }>Follower</button>}
                            </div>
                        </div>
                        <div className={st.users__point_body}>   
                            <div className={st.user__description}>
                                <p className={st.user__name}>{user.name}</p>
                                <p className={st.user__status}>{user.status}</p>
                            </div>
                            <div className={st.user__location}>
                                <p>{user.location}</p>
                            </div>
                        </div>
                    </div>
    )
}