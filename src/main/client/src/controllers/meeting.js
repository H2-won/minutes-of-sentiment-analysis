export const produceConference = (title, pw) => {
  console.log(title, pw, localStorage.getItem('accessToken'));

  fetch('/api/meeting', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({
      userId: localStorage.getItem('userId'),
      code: '123',
      name: title,
      password: pw,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('res is :', res);
      localStorage.setItem('minutesId', res.minutesId);
      localStorage.setItem('hostId', res.hostId);
      window.location.href = `/meeting/${res.code}?open=true`;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const enterConference = (conferenceCode) => {
  fetch('/api/meeting/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({
      userId: localStorage.getItem('userId'),
      code: conferenceCode,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('res is :', res);
      localStorage.setItem('minutesId', res.minutesId);
      window.location.href = `/meeting/${conferenceCode}?open=false`;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const startRecording = (conferenceCode) => {
  fetch('/api/minutes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
    body: JSON.stringify({
      meetingCode: conferenceCode,
      voiceFileLink: '',
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('res is :', res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const stopRecording = (minutesId) => {
  fetch(`/api/minutes/${minutesId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('res is :', res);
    })
    .catch((err) => {
      console.log(err);
    });
};
