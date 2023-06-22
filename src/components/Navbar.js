import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed='top'
      expand='md'
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container>
        <ul className='home-about-social-links'>
          <li className='social-icons'>
            <a
              href='https://t.me/MetaNetworkSocial'
              target='_blank'
              rel='noreferrer'
              className='icon-colour home-social-icons'
            >
              <FaTelegram />
            </a>
          </li>
          <li className='social-icons'>
            <a
              href='https://twitter.com/SocialMetaNet'
              target='_blank'
              rel='noreferrer'
              className='icon-colour  home-social-icons'
            >
              <AiOutlineTwitter />
            </a>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default NavBar;
