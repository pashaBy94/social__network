import React from "react";
import st from "./Users.module.css"
import OneUser from "./ListUsers/OneUser/OneUser";
import CountPages from "./CountPages/CountPages";
import ListUsers from "./ListUsers/ListUsers";

export default function Users(props) {
    return (
        <div className={st.users}>
            <h2 className={st.users__title}>Друзья</h2>
            <CountPages countPage={props.countPage} numberCurrentPage={props.numberCurrentPage} setAjaxAndWriteUser={props.setAjaxAndWriteUser}/>
            <div className={st.users__content}>
                <ListUsers props={props}/>
                <div className={st.users__show}>
                    <div className={st.users__show_vrap}>
                        <button className={st.users__btn}>Show more</button>
                    </div>
                </div>
            </div>
        </div>
    )

}