import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  const faceBoxes = []
  for(let i=0;i<boxes.length;i++){
    const box = boxes[i]
    faceBoxes.push(
      <div key={i} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
    )
  }
  
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {faceBoxes}
      </div>
    </div>
  );
}

export default FaceRecognition;