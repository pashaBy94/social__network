import React from "react";
import st from './Post.module.css';

export default function Post(props){
    console.log(props);
    function deletePost(e){
        e.preventDefault();
        props.postsDelete(props.id)
    }
    return(
            <div className={st.post__item}>
                <div className={`${st.post__tilda}`}></div>
                <p className={st.post__item_text}>{props.post}</p>
                <button onClick={deletePost}>X</button>
            </div>
    )
}