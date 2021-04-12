import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const Btn = styled.div`
  width: 200px;
  height: 60px;
  color: ${palette.white};
  background: ${palette.orange1};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;

function GoogleLoginBtn() {
  return (
    <Link to="/main">
      <Btn>구글 로그인</Btn>
    </Link>
  );
}

export default GoogleLoginBtn;
