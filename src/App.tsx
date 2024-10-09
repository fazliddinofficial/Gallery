import React from "react";
import HeaderPart from "./components/header/index";
import "./App.css";

function App() {
  let allImages = [
    "https://cdn.pixabay.com/photo/2022/11/09/14/13/forest-7580700_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/10/24/12/01/pumpkins-8338100_640.jpg",
    "https://cdn.pixabay.com/photo/2024/09/21/19/23/corn-9064747_640.jpg",
    "https://cdn.pixabay.com/photo/2024/09/19/07/46/versailles-9057981_640.jpg",
    "https://cdn.pixabay.com/photo/2023/03/04/20/07/coffee-7830087_640.jpg",
  ];
  let allImages2 = [
    "https://cdn.pixabay.com/photo/2019/10/30/14/51/fall-4589724_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/06/11/09/20/snake-7256057_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/02/05/23/woman-8359670_640.png",
  ];
  let allImages3 = [
    "https://cdn.pixabay.com/photo/2024/09/23/05/54/wave-9067749_640.jpg",
    "https://cdn.pixabay.com/photo/2023/04/10/19/42/sea-7914544_640.jpg",
    "https://cdn.pixabay.com/photo/2024/09/20/08/17/curtain-9060879_960_720.jpg",
    "https://cdn.pixabay.com/photo/2024/09/27/16/15/autumn-9079361_640.jpg",
  ];
  return (
    <div className="container">
      <HeaderPart />
      <div className="images__wrapper">
        <div className="images__wrapper__column__one">
          {allImages3.map((url) => (
            <img className="img" src={url} alt="img" />
          ))}
        </div>
        <div className="images__wrapper__column__two">
          {allImages2.map((url) => (
            <img className="img" src={url} alt="img" />
          ))}
        </div>
        <div className="images__wrapper__column__three">
          {allImages.map((url) => (
            <img className="img" src={url} alt="img" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
