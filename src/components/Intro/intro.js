import React from 'react'
import './intro.css';
import bg from '../../assets/tharany bg removed.png'
import { Link } from 'react-scroll';
import bagImg from '../../assets/bag.png'
import ResumeDownload from '../ResumeDownload/resume';



const Intro = () => {
 
  return (
   <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Tharany Sivapaskaran</span> <br /> Full Stack Developer</span>
        <p className='introPara'>I am a skilled web developer with experience in <br /> creating visually appealing and user friendly websites </p>
        <div className='buttons'>
          
        <Link to='contactPage' spy={true} offset={-100} duration={500}><button  className='btn1'><img src={bagImg} alt='Hire me' className='bagImg' />Hire Me</button></Link>
        <ResumeDownload />
        
        </div>

    </div>
    <img src={bg} alt='Profile' className='bg' />
   </section>

  );
}

export default Intro
