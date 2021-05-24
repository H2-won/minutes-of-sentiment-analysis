export const produceConference = (title, pw, setConferenceCode, connection) => {
  fetch('/api/meeting', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: localStorage.getItem('userId'),
      code: '',
      name: title,
      password: pw,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
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
