import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavItemBtn,
  NavBtnLink,  
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

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
      <IconContext.Provider value={{ color: '#fff' }}>
          <NavbarContainer>
            <NavLogo to='/'>
              <img
                src="https://scopo-media.s3.us-west-1.amazonaws.com/s3fs-public/2021-04/semicolon.png?auto=compress&cs=tinysrgb&h=10&w=10"
                alt="new"
                height="34"
              />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick}click={click}>
              <NavItem>
                <NavLinks to='/'>About Us</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/swit'>sWIT</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/start-up'>Start Up</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/sponsorship'>Sponsorship</NavLinks>
              </NavItem>           
              <NavItem>
                <NavLinks to='/blog'>Blogs</NavLinks>
              </NavItem>
                 
            <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/for companies">
                    <buton primary>For Companies</buton>
                  </NavBtnLink>
                )  : (
                  <NavBtnLink to="/for companies">
                    <Button fontBig primary>For Companies</Button>
                  </NavBtnLink>
                )} 
                {button ? (
                  <NavBtnLink to="/apply now">
                    <buton primary>Apply Now</buton>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/apply now">
                    <Button fontBig primary>Apply Now</Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              </NavMenu>

          </NavbarContainer>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
