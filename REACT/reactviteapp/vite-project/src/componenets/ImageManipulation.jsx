import React from 'react'
import cat from './cat.png.jpeg'

function ImageManipulation() {
    const[catHeight, setCatHeight] = React.useState(200);
  return (
    <div>
      <h2>Image Manipulation</h2>
      <img src={cat} alt="cat" style={{width: '400px', height: `${catHeight}px`, objectFit: 'cover', borderRadius: '10px', margin: '0px auto', border:'2px solid black'}} />
    </div>
//     <div>
//     <button onClick={() => setCatHeight(catHeight + 20)}>Increase Height</button>
//     </div>
//   )
}

export default ImageManipulation