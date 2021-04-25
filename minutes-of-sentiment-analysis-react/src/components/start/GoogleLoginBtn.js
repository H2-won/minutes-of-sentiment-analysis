import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import palette from '../../lib/styles/palette';

const GoogleSigninBtn = styled.img`
  border-radius: 8px;
  width: 305.6px;
  height: 73.6px;
  transition: 0.2s all;
`;

function GoogleLoginBtn() {
  return (
    <Link to="/main">
      <GoogleSigninBtn
        src="/images/btn_google_signin_light_normal_web@2x.png"
        onMouseOver={(e) => {
          e.currentTarget.src =
            '/images/btn_google_signin_light_focus_web@2x.png';
        }}
        onMouseOut={(e) => {
          e.currentTarget.src =
            '/images/btn_google_signin_light_normal_web@2x.png';
        }}
        onMouseDown={(e) => {
          e.currentTarget.src =
            '/images/btn_google_signin_light_pressed_web@2x.png';
        }}
        onMouseUp={(e) => {
          e.currentTarget.src =
            '/images/btn_google_signin_light_normal_web@2x.png';
        }}
      />
    </Link>
  );
}

export default GoogleLoginBtn;
