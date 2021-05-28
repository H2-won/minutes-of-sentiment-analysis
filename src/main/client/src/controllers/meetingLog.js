export const getMinutesList = (userId) => {
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
      return res;
    })
    .catch((err) => console.log(err));
};
