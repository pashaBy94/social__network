import React from "react";
import { memo } from "react";
import st from './UserBarAva.module.css'

export default memo(function UserBarAva({profile, toggleBar}){
  const photo = (prof)=>prof?.photos?.small?prof.photos.small:'noava.png';
        return(
            <div className={st.user__bar__head}>
                <img alt=''
                src={photo(profile)} 
                className={st.user__imag}
                onClick={()=>toggleBar(pr=>!pr)}
                />
            </div>
        )
    })
