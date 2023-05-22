import React from "react";
import st from "./CountPages.module.css"
import { getNumberCountPages } from "../../../utils/helpers";

export default function CountPages(props) {
    return (
        <div className={st.steps}>
            {getNumberCountPages(props.countPage, props.numberCurrentPage, props.setAjaxAndWriteUser, st)}
        </div>
    )
}