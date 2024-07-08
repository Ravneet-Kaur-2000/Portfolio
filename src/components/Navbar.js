import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Hamburger from './Hamburger'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(location.pathname)
  }, [location])

  const handleLogoClick = () => {
    setPath('/'); // Set path to '/' when logo is clicked
  };
  return (
    <Header>
      <Logo loc={path}>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit', top: 0, left: 0, position: 'inherit'}} onClick={handleLogoClick}>
          <h2 style={{fontFamily:"Tiny5", color:"#4BD99E", paddingLeft:"1.2rem"}}>R</h2>
        </Link>
      </Logo>
      <Hamburger activePath={path} />
    </Header>
  )
}

export default Navbar;

const Header = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  box-sizing: border-box;
  z-index: 99999999999999;
  //background: white;
  flex-direction: row;
  padding: 0 11%;

  
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

const LinksBox = styled.div`
  width: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CTAbox = styled.div``;

const Logo = styled.h1`
  color: ${props => (props.loc === '/' || props.loc === '/About') ? 'dark' : 'white'};
  font-size: 40px;
  font-family: "Major Mono Display", monospace;
  letter-spacing: 0.07em;
  
  span {
    font-family: "Poppins", monospace;
  }
`;