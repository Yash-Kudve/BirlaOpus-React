import React from 'react';
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import search from '../../assets/images/search-btn.png'
import heart from '../../assets/images/heart-btn.png'

const Navbar = () => {
  return (
    <section className='nav-section'>
        <img src={logo1} alt="Birla Opus Logo" />
        <div className='menu-items'>
            <div className='list'>
                <ul>
                    <li>Segments</li>
                    <li>Products</li>
                    <li>Inspirations</li>
                    <li>Tools and Resources</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='icon'>
                <img src={search} alt="search-icon" />
                <img src={heart} alt="heart-icon" />
            </div>
        </div>
        <img src={logo2} alt="Aditya Birla Logo" />
    </section>
  )
}

export default Navbar