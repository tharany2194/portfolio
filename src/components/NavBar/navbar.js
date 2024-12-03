import React ,{useState} from 'react'
import './navbar.css';
import logo from '../../assets/logobut1.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/blue-hb_butn-removebg-preview.png'

const Navbar = () => {
  const [showMenu, setShowMenu] =useState(false);
  return (
    <nav className='navbar'>
      <img src ={logo }alt='logo' className='logo' />
      <div className='desktopMenu' >
        <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='desktopMenuListItem' >Home</Link>
        <Link activeClass='active' to='skills' spy={true} offset={-100} duration={500} className='desktopMenuListItem' >About</Link>
        <Link activeClass='active' to='works' spy={true} offset={-100} duration={500} className='desktopMenuListItem' >Portfolio</Link>
        

      </div>
      <Link to='contactPage' spy={true} offset={-100} duration={500}> < button className='desktopMenuBtn' onClick={()=>{document.getElementById("contactPage").scrollIntoView({behavior:'smooth'});
    }}>
     <img src={contactImg} alt='Contact' className='desktopMenuImg' />Contact Me</button></Link>

     <img src ={menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className='navMenu' style={{display:showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>

      </div>
    </nav>
  )
}

export default Navbar

