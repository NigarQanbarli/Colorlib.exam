import React from 'react'
import './Home.css'
import Person from '../../assets/image/homeimg.png'
import '../Card/Card'
import Card from '../Card/Card'
import Women from '../WomenCollection/Women'
import Men from '../MenCollection/Men'
import Collections from '../Collections/Collections'
import Footer from '../../Layout/Footer/Footer'
function Home() {
  return (
   <>
   <div className="container1">
    <div className="home-left">
      <h1>Madewell</h1>
      <p>Summer Collection</p>
      <h3>1,499 $1,999</h3>
      <div className="button">
      <button>SHUP NOW</button>
      <button>SHUP NOW</button>
      </div>
     
      </div>
    <div className="home-right">
        <div className="img">
            <img src={Person} alt="" />
        </div>
    </div>
   </div>
   <Card/>
   <Women/>
   <Collections/>
   <Men/>
   <Footer/>
   </>
  )
}

export default Home