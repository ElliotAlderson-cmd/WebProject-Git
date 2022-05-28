import React from './about.css';

export default function About() {
  return (
    <>
    <div className='about'>
      <div className='aboutTitle'>
        <h1>About</h1>
        <p className='para'> Testing reader-san ! Welcome to SenpaiReads. This a website built to celebrate the love and passion
        of anime and manga fans all over the world.</p>
        <p className='subPara'>We welcome you to our community. Have fun !!</p>
      </div>
    </div>
    <footer className='footerContent'>
      Consider supporting us :<br/>
      <div className='icons'>
          <i class="fa-brands fa-patreon"></i>
          <i class="fa-brands fa-paypal"></i>
          <i class="fa-brands fa-cc-paypal"></i>
      </div>
    </footer>
    </>
  )
}
