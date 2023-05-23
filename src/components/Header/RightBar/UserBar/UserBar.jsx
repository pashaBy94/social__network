import React from "react";
import st from './UserBar.module.css'
import UserBarAva from "./UserBarAva/UserBarAva";
import UserBarContent from "./UserBarContent/UserBarContent";

export default function UserBar(props){
        return(
        <div className={st.user__bar}>
            <UserBarAva toggleBar={props.toggleBar} profile={props.profile}/>
            <UserBarContent props={props}/>
        </div>
        )
    }
