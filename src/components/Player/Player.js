import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    
    {/*
    const [currentTime, setCurrentTime] = useState(0);
    const [totalTime, setTimeTotal] = useState(0);
    const configCurrentTime = (value: number) => {
        setCurrentTime(value);
        audioEl.currentTime = value;
    }
    */}


    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className="c-player">
            <audio 
              src={props.songs[props.currentSongIndex].src} 
              ref={audioEl}>
            </audio>


            <h4>Tocando</h4>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Próximo: <span>{props.songs[props.nextSongIndex].title} de {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Player;
