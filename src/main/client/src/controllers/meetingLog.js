export const getMinutesList = async (userId) => {
  const token = localStorage.getItem('accessToken');

  const response = await fetch(`/api/user/${userId}/minutes`, {
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
    .catch((err) => {
      console.log(err);
      return [];
    });

  console.log(response);
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
