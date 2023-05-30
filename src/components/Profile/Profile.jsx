import React from "react";
import st from './Profile.module.css';
import UserProfile from "./UserProfile/UserProfile";
import MyPostContainer from "./MyPost/MyPostContainer";
import Preloader from "../general/Preloader/Preloader";

export default function Profile({ profile, status, setCurrentStatusThunk, savePhotoThunk, isMyPages, myProfile, updateInfoProfileThunk, authenticationId }) {
  console.log(authenticationId);
  if (!profile) return <Preloader />
  return (
    <div className={st.content}>
      <h2 className={st.content__title}>Profile</h2>
      <UserProfile 
      profile={profile} 
      status={status} 
      setCurrentStatusThunk={setCurrentStatusThunk} 
      updateInfoProfileThunk={updateInfoProfileThunk}
      savePhotoThunk={savePhotoThunk} 
      isMyPages={isMyPages} 
      authenticationId={authenticationId}
      myProfile={myProfile}/>
      <MyPostContainer />
    </div>
  )
}
