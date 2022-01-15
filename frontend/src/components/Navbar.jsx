import React, {useState, useEffect} from 'react'
import "./Navbar.scss";
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCat } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (

    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
          <FontAwesomeIcon icon={faCat} /> Find Me-Ow!
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-mean active' : 'nav-menu'}> 
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/report-pet' className='nav-links' onClick={closeMobileMenu}>
                Report Pet
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/search-pet' className='nav-links' onClick={closeMobileMenu}>
                Search Pet
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign-up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

