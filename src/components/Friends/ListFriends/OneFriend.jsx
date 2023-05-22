import React from "react";
import st from './ListFriends.module.css';
import { NavLink } from "react-router-dom";


export default function OneFriend({name, imag, id}){

    return(
          <li>
            <NavLink to={`/profile/${id}`}>
              <img src={imag} alt='' className={st.friends__img}/>
              <p>{name}</p>
            </NavLink>
          </li>
    )
}