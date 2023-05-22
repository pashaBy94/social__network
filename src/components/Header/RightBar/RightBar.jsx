import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import st from './RightBar.module.css'
import UserBar from "./UserBar/UserBar";

export default function RightBar({props}){
  const [stateBar, toggleBar] = useState(false);
  const bar = props.isAuth?(<UserBar 
  toggleBar={toggleBar} 
  stateBar={stateBar} 
  profile={props.profile}
  logoutThank={props.logoutThank}
  />):(<NavLink to='/login'>Login</NavLink>);
    return(
      <div className={st.header__right}>
        {bar}
      </div>
      )
}