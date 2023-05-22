import React from "react";
import st from './AboutMy.module.css';

export default function AboutMy({ profile }) {
    return (
        <div className={st.about__save}>
            <p><strong>Date of Birth:</strong> 27 september</p>
            <p><strong>City:</strong> Mogilev</p>
            <p><strong>Education:</strong> BSU'11</p>
            <p><strong>Web Site:</strong> <a href='https://it-kamasutra.com'>https://it-kamasutra.com</a></p>
            <p><strong>About my: </strong>{profile.aboutMe}</p>
            <p><strong>Contacts my: </strong>{profile?.contacts?.github}</p>
        </div>
    )
}