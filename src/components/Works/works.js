import React from 'react'
import './works.css'

import diceGame from '../../assets/Dice game.png'
import drumKit from '../../assets/Drum kit.png'
import emojipedia from '../../assets/emojipedia.png'
import keeperApp from '../../assets/keeper-app.png'
import timeUpdater from '../../assets/Time Date Updater.png'
import tinDog from '../../assets/Tindog.png'
import todolist from '../../assets/todolist.png'
import tomatoApp from '../../assets/tomato-app.png'
import websiteImg from '../../assets/website design.png'
import portfolio from '../../assets/Portfolio_screen_shot.png'




const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is Pixel Perfect.I am excited to bring my skills and experience to help businesses achieve their their goals and create a strong line presence. </span>
       
       
        <div className='skillBar'>
            <img src={websiteImg} alt='Web Design' className='skillBarImg'/>
            <div className='skillBarTitle'>
              <h2>Website Design</h2>
              <div className='text'>
              <p>I've listed below the Projects I worked on  </p>
              </div>
              
             
              
            </div>
        </div>
       
    
           
            <div className='worksImgs'>
            <img src={tomatoApp} title="This Project is not hosted yet!" alt='' className='worksImg' />
            <a href='' target='_blank' rel='noreferrer'><img title="Current Page!" src={portfolio} alt='' className='worksImg' /></a>
            <a href='https://keeper-app-2194.netlify.app/' target='_blank' rel='noreferrer'><img title="Click on this image to see my work!" src={keeperApp} alt='' className='worksImg1' /></a>
            <a href='https://todolist-app-2194.netlify.app/' target='_blank' rel='noreferrer'><img title="Click on this image to see my work!" src={todolist} alt='' className='worksImg' /></a>
            <a href='https://counter-app-2194.netlify.app/' target='_blank' rel='noreferrer'><img title="Click on this image to see my work!" src={timeUpdater} alt='' className='worksImg' /></a>
            <a href='https://drumkit-app-2194.netlify.app/' target='_blank' rel='noreferrer'> <img title="Click on this image to see my work!" src={drumKit} alt='' className='worksImg' /></a>
            <a href='https://dicegame-app-2194.netlify.app/' target='_blank' rel='noreferrer'> <img title="Click on this image to see my work!" src={diceGame} alt='' className='worksImg' /></a>
            <a href='https://tindog-app-2194.netlify.app/' target='_blank' rel='noreferrer'> <img title="Click on this image to see my work!" src={tinDog} alt='' className='worksImg' /></a>
            <a href='https://emojipedia-app-2194.netlify.app/' target='_blank' rel='noreferrer'><img title="Click on this image to see my work!" src={emojipedia} alt='' className='worksImg' /></a>
        </div>
        <button className='worksBtn' >See More</button>
    </section>
  )
}

export default Works;