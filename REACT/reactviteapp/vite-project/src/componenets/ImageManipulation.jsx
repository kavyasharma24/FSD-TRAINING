import React, { useState } from 'react';
import Cat from './cat.png.jpeg';

const ImageManipulation = () => {
  const [catHeight, setCatHeight] = useState(200);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // 👉 Function to generate random RGB color
  const changeBackgroundColor = () => {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
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
            transition: 'all 0.3s ease' // smooth change
          }}
          src={Cat}
          alt="Cat"
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setCatHeight(catHeight + 20)}>Increase Size</button>
        <button onClick={() => setCatHeight(catHeight - 20)} style={{ marginLeft: '10px' }}>
          Decrease Size
        </button>
        <button onClick={changeBackgroundColor} style={{ marginLeft: '10px' }}>
          Change Background Color
        </button>
      </div>
    </div>
  );
};

export default ImageManipulation;
