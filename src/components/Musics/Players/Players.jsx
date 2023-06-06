import { useEffect, useState } from "react"; 
import useSound from "use-sound"; //для работы со звуком
import qala from "./../music1.mp3"; // импорт музыки
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // иконки для воспроизведения и паузы
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // иконки для следующего и предыдущего трека
import { IconContext } from "react-icons"; // для кастомизации иконок
import st from './Players.module.css';


export default function Players(){
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(qala);
  const playingButton = () => {
    if (isPlaying) {
      pause(); // приостанавливаем воспроизведение звука
      setIsPlaying(false);
    } else {
      play(); // воспроизводим аудиозапись
      setIsPlaying(true);
    }
  };
  return (
    <div className={st.component}>
      <h2>Playing Now</h2>
      <img
        className={st.musicCover}
        src="https://picsum.photos/200/200"
      />
      <div>
        <h3 className={st.title}>Rubaiyyan</h3>
        <p className={st.subTitle}>Qala</p>
      </div>
      <div>
        <button className={st.playButton}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className={st.playButton} onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className={st.playButton} onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className={st.playButton}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );

}