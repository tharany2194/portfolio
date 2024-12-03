import React from 'react'
import './resume.css'
import downloadIcon from '../../assets/download-icon.png';

const ResumeDownload = () => {
    return (
      <div>
        
        <a href="/Resume_tharany.pdf" download="Tharany's Resume.pdf">
          <button className='btn2'><img className='download' src={downloadIcon} alt='resume'/> Resume</button>
        </a>
      </div>
    );
  };
  
  export default ResumeDownload;