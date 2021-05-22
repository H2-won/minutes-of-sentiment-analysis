export const getUserInfo = (token, setLogged, setUserInfo) => {
  console.log(token, setLogged, setUserInfo);
  fetch(
    'http://ec2-3-34-172-246.ap-northeast-2.compute.amazonaws.com:8080/api/user-info',
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      Authorization: 'Bearer ' + token,
    },
  )
    .then((res) => {
      setLogged(true);
      setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
