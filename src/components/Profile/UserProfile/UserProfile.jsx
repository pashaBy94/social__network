import React from "react";
import st from './UserProfile.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";

export default function UserProfile({profile, status, setCurrentStatusThunk}){
    return(
            <section className={st.about}>
              <img src={profile.photos.large} height='250px'/>
              <div className={st.about__text}>
                <h2>{profile.fullName}</h2>
                <ProfileStatus status={status} setCurrentStatusThunk={setCurrentStatusThunk}/>
                <div className={st.about__save}>
                <p><strong>Date of Birth:</strong> 27 september</p>
                  <p><strong>City:</strong> Mogilev</p>
                  <p><strong>Education:</strong> BSU'11</p>
                  <p><strong>Web Site:</strong> <a href='https://it-kamasutra.com'>https://it-kamasutra.com</a></p>
                </div>
                <div>{profile.aboutMe}</div>
                <div>Contacts my: {profile.contacts.github}</div>
              </div>
            </section>
    )
  }