import React from "react";
import st from "./Messag.module.css";

export default function Messag({messag}){
    return(
        <div className={st.messag__item}>
            <div className={st.message}>{messag}</div>
        </div>
    )
}