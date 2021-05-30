export const getMinutesList = (userId) => {
  const token = localStorage.getItem('accessToken');
  let response;

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
      response = res;
    })
    .catch((err) => console.log(err));

  return response;
};

export const lookupMeetingLogByCode = (code, pw) => {
  const token = localStorage.getItem('accessToken');

  fetch(`/api/minutes/${code}`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: pw,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('회의록 정보 : ', res);
      return res;
    })
    .catch((err) => console.log(err));
};

export const getMeetingLogInfo = (minutesId) => {
  const token = localStorage.getItem('accessToken');
  fetch(`/api/minutes/${minutesId}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('회의록 정보:', res);
      return res;
    })
    .catch((err) => console.log(err));
};
