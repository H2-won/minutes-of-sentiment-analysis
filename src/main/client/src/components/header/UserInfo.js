import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import * as Auth from '../../controllers/auth';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 110px;
`;
const UserName = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${palette.black};
`;

const LogoutBtn = styled.button`
  width: 110px;
  height: 40px;
  font-size: 20px;
  margin-left: 1rem;
  border-radius: 4px;

  background: ${palette.orange1};
  color: ${palette.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function UserInfo() {
  // const [token, setToken] = useState(null);
  const [logged, setLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({
    id: 1,
    name: '방조임남',
    email: '',
  });
  // const getLocalToken = localStorage.getItem('accessToken');
  // if (getLocalToken) {
  //   setToken(getLocalToken);
  // }
  const token = localStorage.getItem('accessToken')
      ? localStorage.getItem('accessToken')
      : null;

  console.log(token);

  useEffect(() => {
    if (token) {
      console.log('token :', token);
      Auth.getUserInfo(token, setLogged, setUserInfo);
    }
  }, [token]);

  const onLogout = () => {
    localStorage.removeItem('accessToken');
    // console.log('remove token');
  };
  return (
    <Container>
      {logged && (
        <>
          <UserName>{userInfo.name}</UserName>
          <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
        </>
      )}
    </Container>
  );
}

export default UserInfo;
