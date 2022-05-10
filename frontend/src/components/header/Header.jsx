import React from './header.css';

export default function Header() {
  return (
    <>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">SenpaiReads</span>
      </div>
    <div className='headerRight'>
        <p className="desc">
          Read your favourite Manga,
          </p>
          <p className='subDesc'>
            Anytime,Anywhere.
        </p>
    </div>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F10%2F705565-tokyo-kushu-anime-manga-artwork-ghoul.jpg&f=1&nofb=1" alt="Header img" className="headerImg"
    />
    </div>
    <div className='bottom'>
      <div className='bottomText'>
        Read the latest issues
        from Shonen jump.
      </div>
      <img 
      src="https://images.unsplash.com/photo-1569701813229-33284b643e3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFuZ2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      alt="jump Img"
      className='jumpImg'/>
    </div>
    <hr/>
    <div className='headerEnd'>
      <footer className='footerText'>
        Get noticed by Senpai :
        <ul className='socialIcons'>
          <li className="fa-brands fa-facebook-square"></li>
          <li className="fa-brands fa-twitter-square"></li>
          <li className="fa-brands fa-pinterest"></li>
          <li className="fa-brands fa-instagram-square"></li>
        </ul>
      </footer>
    </div>
    </>
  )
}
