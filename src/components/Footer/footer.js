import React from 'react'
import './footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
        copyright &#169; {currentYear} Tharany sivapaskaran.All rights Reserved.
    </footer>
  )
}

export default Footer;
