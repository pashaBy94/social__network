import React, { useState } from "react";
import st from './Musics.module.css';
import useSound from "use-sound";
import { IconContext } from "react-icons"; 
import { BiCaretRightCircle, BiDownload, BiPauseCircle } from "react-icons/bi";
import { initId } from "../../utils/helpers";
import Players from "./Players/Players";

function MusicItem(props) {
    return (
        <div className={`${st.musics__item} ${(props.ind === props.isPress) ? st.music__current : null}`}>
            <div onClick={() => props.setSound(props.ind)} className={st.music__play}>
                <IconContext.Provider value={{ size: "3em", color: "#4A76A8" }}>
                    {(props.ind === props.isPress) ? <BiPauseCircle /> : <BiCaretRightCircle />}
                </IconContext.Provider>
            </div>
            <div>{props.el.name}</div>
            <div>
                <IconContext.Provider value={{ size: "3em", color: "#4A76A8" }}>
                    <BiDownload />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default function Musics(props) {
    const [isPress, setPress] = useState(null);
    const [openPlayers, setOpenedPlayers] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(props.listMusics[isPress || 0].content);

    function setSound(ind) {
        if (ind === isPress) {
            setPress(null);
            setOpenedPlayers(false);
            pause();
            setIsPlaying(false)
        }
        else {
            pause();
            setPress(ind);
            setOpenedPlayers(true);
            setIsPlaying(false)
        }
    }
    return (<div className={st.musics}>
        {openPlayers?<Players 
        setOpenedPlayers={setOpenedPlayers} 
        setPress={setPress} 
        play={play}
        pause={pause}
        duration={duration}
        sound={sound}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        maxCount = {props.listMusics.length}
        />:null}
        <h3 className={st.musics__title}>Musics</h3>
        <div className={st.musics__items}>
            {props.listMusics.map((el, ind) => (
                <MusicItem el={el} ind={ind} key={initId()} setSound={setSound} isPress={isPress}/>
            ))}
        </div>
    </div>
    )
}

