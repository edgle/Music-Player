import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Démons ft. Laylow",
      artist: "Joanna",
      img_src: "./images/cover01.jpeg",
      src: "./music/audio01.mp3"
    },
    {
      title: "Overnight",
      artist: "Parcels",
      img_src: "./images/cover02.jpg",
      src: "./music/audio02.flac"
    },
    {
      title: "Go Hard",
      artist: "Twice",
      img_src: "./images/cover03.jpg",
      src: "./music/audio03.flac"
    },
    {
      title: "Physical",
      artist: "Dua Lipa",
      img_src: "./images/cover04.jpg",
      src: "./music/audio04.flac"
    },
    {
      title: "Midnight Train(심야행)",
      artist: "Se So Neon",
      img_src: "./images/cover05.jpg",
      src: "./music/audio05.flac"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
