import React from "react";
import OneFriend from "./OneFriend";
import st from './ListFriends.module.css';
import { listComponentWriteFriends } from "../../../utils/helpers";

export default function ListFriends({topFriends}){
    return(
          <ul className={st.topFriends}>
              {listComponentWriteFriends(topFriends, OneFriend)}
          </ul>
    )
}