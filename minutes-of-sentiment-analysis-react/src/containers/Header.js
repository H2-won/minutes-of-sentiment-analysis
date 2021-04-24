import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/header/Logo';
import Wrapper from '../components/header/Wrapper';

function Header() {
  return (
    <Wrapper>
      <Link to="/main">
        <Logo />
      </Link>
    </Wrapper>
  );
}

export default Header;
