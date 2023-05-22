import React from "react";
import st from './PostList.module.css';
import Post from "./Post/Post";
import { listComponentWritePosts } from "../../../../utils/helpers";

export default function PostList(props){
    return(
        <div>
            <section className={st.post__items}>
                {listComponentWritePosts(props, Post)}
            </section>
        </div>
        )
}