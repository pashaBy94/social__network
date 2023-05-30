import React from "react";
import st from './UserProfile.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import AboutMy from "./AboutMy/AboutMy";
import Preloader from "../../general/Preloader/Preloader";

export default function UserProfile({ profile, status, setCurrentStatusThunk, savePhotoThunk, isMyPages, myProfile, updateInfoProfileThunk, authenticationId }) {
  function getPhoto(e){
    savePhotoThunk(e.target.files[0]);
  }
  if(!myProfile) return <Preloader />
  return (
    <section className={st.about}>
      <img 
      src={isMyPages?myProfile.photos.large:profile.photos.large || 'noava.png'} 
      alt="" 
      height='250px' 
      width='250px'
      className={st.user__imag}/>
      {isMyPages 
      && (<form action="">
            <input type="file" id="download__photo" onChange={getPhoto}/>
          </form>
      )}
      <div className={st.about__text}>
        <h2>{profile.fullName}</h2>
        <ProfileStatus status={status} setCurrentStatusThunk={setCurrentStatusThunk} />
        <AboutMy profile={{ ...profile }} isMyPages={isMyPages} updateInfoProfileThunk={updateInfoProfileThunk} authenticationId={authenticationId} />
      </div>
    </section>
  )
}