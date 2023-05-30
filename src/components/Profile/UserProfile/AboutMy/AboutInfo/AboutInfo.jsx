import React from "react";
import st from './AboutInfo.module.css';
import Contacts from "./../Contacts/Contacts";

export default function AboutInfo({ profile, setModEdit, isMyPages }) {
    return (
        <div className={st.about__save}>
            <p><strong>Looking for a job: </strong>{profile.lookingForAJob?'Yes':'No'}</p>
            <p><strong>Looking for a job description: </strong>{profile.lookingForAJob?profile.lookingForAJob:'Developer'}</p>
            <p><strong>About my: </strong>{profile.aboutMe}</p>
            <p><strong>Contacts my: </strong></p>
            <Contacts contacts={profile.contacts}/>
            {isMyPages?<button onClick={()=>setModEdit(true)}>Open mode edit</button>:null}
        </div>
    )
}