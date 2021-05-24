export const getUserInfo = (token, setLogged, setUserInfo) => {
  console.log(token, setLogged, setUserInfo);
  fetch(
    // 'http://ec2-3-34-172-246.ap-northeast-2.compute.amazonaws.com:8080/api/user-info',
    '/api/user-info',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setLogged(true);
      setUserInfo(res);
      //  로컬에 로그인 유저 이름, 아이디 저장
      localStorage.setItem('userId', res.id);
      localStorage.setItem('userName', res.name);
    })
    .catch((err) => {
      console.log(err);
    });
};
