import React from 'react'
import "../style/Inital.scss";

const Initial = ({ color }) => {
     return (
          <div>
               <div className={`InitialContainer bg-${color === 'black' ? 'black' : 'black'}`}>
                    <div className="box">
                         <div className="title">
                              <span className="block"></span>
                              <h1 className='font-mono'>Shubham Anand</h1>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Initial