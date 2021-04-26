import React from 'react';
import styled from 'styled-components';

const GoogleSigninBtn = styled.img`
  border-radius: 8px;
  width: 305.6px;
  height: 73.6px;
  transition: 0.2s all;
`;

function GoogleLoginBtn() {
  return (
    <a href={'/oauth2/authorization/google'} role={'button'}>
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
    </a>
  );
}

export default GoogleLoginBtn;
