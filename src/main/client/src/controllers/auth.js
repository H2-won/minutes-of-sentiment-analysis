export const getUserInfo = (token, setLogged, setUserInfo) => {
  fetch('/api/user-info', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    Authorization: 'Bearer ' + token,
  })
    .then((res) => {
      setLogged(true);
      setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
