import React, { useRef } from "react";

function App() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleRestart = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>  Video player</h2>
      <video
        ref={videoRef}
        width="500"
        style={styles.video}
        src="https://videos.pexels.com/video-files/854958/854958-hd_1920_1080_30fps.mp4"
      />
      <div style={styles.controls}>
        <button onClick={handlePlay} style={styles.btn}>Play </button>
        <button onClick={handlePause} style={styles.btn}>Pause </button>
        <button onClick={handleRestart} style={styles.btn}>Restart </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#1e1e1e",
    color: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "fit-content",
    margin: "50px auto",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)"
  },
  title: {
    marginBottom: "10px"
  },
  video: {
    borderRadius: "8px",
    marginBottom: "15px",
    maxWidth: "100%"
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  },
  btn: {
    backgroundColor: "#ff3c3c",
    border: "none",
    color: "white",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s"
  }
};

export default App;





