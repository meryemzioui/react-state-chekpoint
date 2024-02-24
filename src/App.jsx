import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const personne = {
    fullName: "Meryem Zioui",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgSrc:
      "https://www.dreamhost.com/blog/wp-content/uploads/2021/09/3b8ca1e8-4b9d-4ef2-bd0f-5b32dec8d5e1_des-2222-hire-developer-website201.jpg",
    profession: "Web Developer",
  };
  const [show, setShow] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let interval;
    if (show) {
      interval = setInterval(() => {
        setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [show]);

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  const { fullName, bio, imgSrc, profession } = personne;

  return (
    <div>
      <button onClick={toggleShow}>Toggle Profile</button>
      {show && (
        <div>
          <h1>{fullName}</h1>
          <p>{bio}</p>
          <img src={imgSrc} alt="Profile" style={{ width: "250px" }} />
          <p>{profession}</p>
        </div>
      )}
      <p>Time Elapsed: {timeElapsed} seconds</p>
    </div>
  );
}

export default App;
