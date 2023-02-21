import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <section className='logo'>
                <img src='assets/img/Logo.png' width="100" height="100"/>
                <span><small>Nikonway&copy; 2014-2023</small></span>
            </section>
            <section className="aboutUs">
                <h2><strong>About Us</strong></h2>
                <a href="https://www.instagram.com/antthony_12/" target="_blank">Our team</a>
                <a href="">Localization</a>
            </section>
        </div>
        
    </footer>
  )
}

export default Footer