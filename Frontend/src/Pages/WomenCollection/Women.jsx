import React from 'react'
import './/Women.css'
import Woman from '../../assets/image/women.png'
function Women() {
  return (
   <>
   <div className="container-women">
    <div className="women-left">
        <div className="img">
            <img src={Woman} alt="" />
        </div>
    </div>
    <div className="women-right">
        <p style={{fontFamily:"cursive", fontSize:""}}>#New Summer Collection 2019</p>
        <h1>Jacket</h1>
        <button>SHUP NOW</button>
    </div>
   </div>
   </>
  )
}

export default Women