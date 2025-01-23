import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="left">
            <h1>Dealers</h1>
          </div>
          <div className="center">
            <div>
              <ul className='navbar-list'>
                <Link className='list'>COLLECTION</Link>
                <Link className='list'>SHOP</Link>
                <Link className='list'>CATALOGS</Link>
                <Link className='list'>CONTACT</Link>
              </ul>
            </div>
          </div>
          <div className="right">
            <div className="icons">
              <Link className='icon'> <i class="fa-solid fa-magnifying-glass"></i></Link>
              <Link className='icon'> <i class="fa-solid fa-heart"></i></Link>
              <Link className='icon'> <i class="fa-solid fa-cart-shopping"></i></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Navbar
