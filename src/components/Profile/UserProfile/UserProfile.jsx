import React from "react";
import st from './UserProfile.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import AboutMy from "./AboutMy/AboutMy";

export default function UserProfile({ profile, status, setCurrentStatusThunk }) {
  return (
    <section className={st.about}>
      <img src={profile.photos.large} height='250px' />
      <div className={st.about__text}>
        <h2>{profile.fullName}</h2>
        <ProfileStatus status={status} setCurrentStatusThunk={setCurrentStatusThunk} />
        <AboutMy profile={{ profile }} />
      </div>
    </section>
  )
}