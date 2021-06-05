export const getMinutesList = (setMinutesList) => {
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('accessToken');
  fetch(`/api/user/${userId}/minutes`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('회의록 리스트 : ', res);
      setMinutesList(res);
    })
    .catch((err) => console.log(err));
};
