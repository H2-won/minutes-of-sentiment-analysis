export const produceConference = (title, pw, setConferenceCode, connection) => {
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
      console.log(res.code);
      // window.location.href=`/meeting/${res.code}`;
      setConferenceCode(res.code);
      connection.open(res.code, function (isRoomOpened, roomid, error) {
        if (isRoomOpened === true) {
        } else {
          if (error === 'Room not available') {
            alert('이미 존재하는 방입니다. 새로운 방을 만들거나 참가하세요!');
            window.location.href = '/main';
            return;
          }
          alert(error + 'error log');
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
