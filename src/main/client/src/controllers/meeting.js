export const produceConference = (title, pw, setConferenceCode) => {
  fetch('/api/meeting', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: localStorage.getItem('userId'),
      name: title,
      pw: pw,
    }),
  })
    .then((res) => {
      setConferenceCode(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
