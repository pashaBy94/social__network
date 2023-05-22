import React from "react";
import st from './Header.module.css'
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";

export default function Header(props){
    return(
        <header className={st.header}>
          <LeftBar />
          <RightBar props={props}/>
      </header>
    )
}
