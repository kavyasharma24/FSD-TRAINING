import React, { useState } from 'react';
import Cat from './cat.png.jpeg';

const ImageManipulation = () => {
  const [catHeight, setCatHeight] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [imageAngle, setImageAngle] = useState(0);

  const changeBackgroundColor = () => {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  };

  const rotateImage = () => {
    setImageAngle((prevAngle) => prevAngle + 30);
  };

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div>
        <img
          style={{
            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            border: '2px solid white',
            height: `${catHeight}px`,
            width: '400px',
            padding: '70px',
            transform: `rotate(${imageAngle}deg)`,
            transition: 'all 0.5s ease',
          }}
          src={Cat}
          alt="Cat"
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={rotateImage}>Rotate Image</button>
        <button onClick={() => setCatHeight(catHeight + 20)} style={{ marginLeft: '10px' }}>
          Increase Size
        </button>
        <button onClick={() => setCatHeight(catHeight - 20)} style={{ marginLeft: '10px' }}>
          Decrease Size
        </button>
        <button onClick={changeBackgroundColor} style={{ marginLeft: '10px' }}>
          Change Background Color
        </button>

        <h3>Red color value: {red}</h3>
        <h3>Green color value: {green}</h3>
        <h3>Blue color value: {blue}</h3>
      </div>
    </div>
  );
};

export default ImageManipulation;
