import React from "react";
import st from "./Users.module.css"
import OneUser from "./OneUser/OneUser";

export default function Users(props) {
    let arrUsers = [];
    for(let i=1; i<=props.countPage; i++){
        arrUsers.push(i);
    }
    return(
        <div className={st.users}>
            <h2 className={st.users__title}>Друзья</h2>
            <div className={st.steps}>
            {arrUsers.map(el=>(<span 
            className={props.numberCurrentPage === el?st.steps__current:st.steps__nocurrent} 
            key={el}
            onClick={()=> props.setAjaxAndWriteUser(el)}
            >{el}</span>))}
            </div>
            <div className={st.users__content}>
                <div className={st.users__content_list}>
                    {props.users.map(el=>(<OneUser 
                        key={el.id} 
                        user={el}
                        thunkAddFollow = {props.thunkAddFollow}
                        thunkUnFollow = {props.thunkUnFollow}
                        addUser={props.addUser}
                        isDisabledFollowButton = {props.isDisabledFollowButton}
                    />))}
                </div>
                <div className={st.users__show}>
                    <div className={st.users__show_vrap}>
                        <button className={st.users__btn}>Show more</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}