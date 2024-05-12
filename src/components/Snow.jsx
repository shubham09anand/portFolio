import React from 'react';
import '../style/Animation.scss';
import Snow from "../assets/snow.webp" 

const Animation = () => {

  return (
    <>
      <div>
        <img src={Snow} alt="" className='h-96 w-96 absolute -top-14' draggable="false"/> 
      </div>
    </>
  )
}

export default Animation