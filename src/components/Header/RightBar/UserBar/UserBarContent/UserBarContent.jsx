import React from "react";
import st from './UserBarContent.module.css'
import UserBarList from './UserBarList';

export default function UserBarContent({props}){
  if(!props.stateBar) return null
        return(
              <div className={st.user__bar__menu}>
                <p className={st.user__title}>{props.myProfile.fullName}</p>
                <UserBarList logoutThank={props.logoutThank} toggleBar={props.toggleBar}/>
              </div>
              )  
    }
