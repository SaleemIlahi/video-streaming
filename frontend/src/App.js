import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';
import videojs from "video.js";
import { useRef } from 'react';

function App() {
  const playerRef  = useRef(null);
  const videoLink = "http://localhost:8000/uploads/courses/b1104f90-c9ae-4a33-ad34-d60bbd260d67/index.m3u8";
  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <div className="App">
      <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
      />
    </div>
  );
}

export default App;
