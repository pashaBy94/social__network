import React from "react";
import Preloader from "../../../../general/Preloader/Preloader";
import st from './UserBarAva.module.css';

export default function UserBarAva({toggleBar, myProfile}){
    if(!myProfile) return <Preloader />
        return(
            <div className={st.user__bar__head}>
                <img alt=''
                src={myProfile.photos.small || 'noava.png'} 
                className={st.user__imag}
                onClick={()=>toggleBar(pr=>!pr)}
                />
            </div>
        )
    }
