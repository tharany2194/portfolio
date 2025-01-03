import React , { useRef } from 'react'
import './contact.css'
import facebookIcon from '../../assets/fb bg remvd.png'
import linkedinIcon from '../../assets/lnkin bg rmvd.png'
import whatsappIcon from '../../assets/WA-removebg-preview.png'
import instagramIcon from '../../assets/Instagram1-removebg-preview.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sjcpe6v', 'template_luwsqgf', form.current, {
        publicKey: 'GdnrsQt4D5AER2PqL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

 
    
    const phoneNumber = "919944382067"; 
    const message = "Hello, I found your portfolio and would like to connect!";
  
    const handleWhatsAppRedirect = () => {
      // Construct WhatsApp URL with prefilled message
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      // Redirect to WhatsApp
      window.open(url, "_blank");
    };
  
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>
              Please fill out the form below to discuss any job opportunities
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input className='name' type='text' placeholder='Your Name' name='Your_name'/>
                <input className='email' type='email' placeholder='Your Email' name='Your_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                <button type='submit' className='submitBtn' value='Send'>Submit</button>
                <div className='links'>
                <img
                onClick={() => window.open('https://www.linkedin.com/in/tharany-sivapaskaran-2b2b6b1b5/', '_blank')}
                 className='link3' src={linkedinIcon} alt='linkedin icon' />
                <img className='link2' src={facebookIcon} alt='facebook icon' />
                <img className='link1' src={instagramIcon} alt='instagram icon' />
                <button  className='whatsappbtn' onClick={handleWhatsAppRedirect} ><img src={whatsappIcon} alt='whatsapp icon' className='link1'/></button>
                   
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
