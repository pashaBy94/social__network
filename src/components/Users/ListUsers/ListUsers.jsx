import React from "react";
import st from "./ListUsers.module.css"
import OneUser from "./OneUser/OneUser";
import { listComponentWriteUsers } from "../../../utils/helpers";

export default function ListUsers({ props }) {
    return (
        <div className={st.users__content_list}>
            <hr className={st.users__content_line}/>
            {listComponentWriteUsers(props, OneUser)}
        </div>
    )

}