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
    // <a href={'/oauth2/authorization/google'} role={'button'}>
    //   <GoogleSigninBtn
    //     src="/images/btn_google_signin_light_normal_web@2x.png"
    //     onMouseOver={(e) => {
    //       e.currentTarget.src =
    //         '/images/btn_google_signin_light_focus_web@2x.png';
    //     }}
    //     onMouseOut={(e) => {
    //       e.currentTarget.src =
    //         '/images/btn_google_signin_light_normal_web@2x.png';
    //     }}
    //     onMouseDown={(e) => {
    //       e.currentTarget.src =
    //         '/images/btn_google_signin_light_pressed_web@2x.png';
    //     }}
    //     onMouseUp={(e) => {
    //       e.currentTarget.src =
    //         '/images/btn_google_signin_light_normal_web@2x.png';
    //     }}
    //   />
    // </a>
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
          onClick={async () => {
              console.log('Click');
              // const url = "/oauth2/authorization/google";
              // const options = {
              //     method: "GET",
              //     headers: {
              //         "Access-Control-Allow-Origin": "*",
              //         "Content-Type": "application/json"
              //     }
              // };
              //
              // let response = await fetch(url, options);
              // let responseOK = response && response.ok;
              //
              // if(responseOK) {
              //     let data = await response.json();
              // }
              fetch("/api/check", {
                  method: "GET"
                  // headers: {
                  //     "Access-Control-Allow-Origin": "*",
                  //     "Content-Type": "application/json"
                  // }
              }).then(response => response.json())
                  .then(data => console.log(data.name + ", " + data.email))
                  .then(() => {window.location.replace('/main')})
                  .catch(() => console.log("stats 데이터를 가져오는 데 실패했습니다."))
          }}
      />
  );
}

export default GoogleLoginBtn;
