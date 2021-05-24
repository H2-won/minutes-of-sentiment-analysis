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
      // 여기서 이제
      //  로컬에 로그인한 사람 아이디 저장해놓기.
      localStorage.setItem('userId', res.userId);
    })
    .catch((err) => {
      console.log(err);
    });
};
