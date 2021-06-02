// 화상 회의 중 북마크 등록 API
export const registrationBookmark = (userId, sentenceId, memo) => {
  const token = localStorage.getItem('accessToken');
  fetch('/api/bookmark', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      userId: userId,
      sentenceId: sentenceId,
      memo: memo,
    }),
  })
    .then((res) => res.json())
    .then((res) => alert('북마크 등록 완료'))
    .catch((err) => console.log(err));
};

// 회의록에서 북마크 등록 API
export const registrationAndUpdateBookmark = (
  userId,
  sentenceId,
  memo,
  setBookmarkInfo,
  recordData,
  setRecordData,
  addBtnState,
  setAddBtnState,
) => {
  const token = localStorage.getItem('accessToken');
  fetch('/api/bookmark/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      userId: userId,
      sentenceId: sentenceId,
      memo: memo,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('북마크 등록 res :', res);
      setBookmarkInfo(res);

      // sentence 다시 불러와서 리렌더링
      fetch(`/api/minutes/${localStorage.getItem('minutesId')}/sentences`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('recordData :', res);
          setRecordData(res);
          setAddBtnState([]);
          for (let i = 0; i < recordData.length; i++) {
            setAddBtnState((addBtnState) => [...addBtnState, false]);
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

export const modifyBookmark = (id, memo, setBookmarkInfo) => {
  const token = localStorage.getItem('accessToken');
  fetch(`/api/bookmark/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(memo),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('북마크 수정 res :', res);
      setBookmarkInfo(res);
    })
    .catch((err) => console.log(err));
};

export const deleteBookmark = (
  id,
  setBookmarkInfo,
  recordData,
  setRecordData,
  setAddBtnState,
) => {
  const token = localStorage.getItem('accessToken');
  fetch(`/api/bookmark/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('북마크 삭제 res :', res);
      setBookmarkInfo(res);

      // sentence 다시 불러와서 리렌더링
      fetch(`/api/minutes/${localStorage.getItem('minutesId')}/sentences`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('recordData :', res);
          setRecordData(res);
          setAddBtnState([]);
          for (let i = 0; i < recordData.length; i++) {
            setAddBtnState((addBtnState) => [...addBtnState, false]);
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

export const getBookmarkAndSetBookmarkState = (
  bookmarkState,
  setBookmarkState,
) => {
  const token = localStorage.getItem('accessToken');
  const minutesId = localStorage.getItem('minutesId');

  fetch(`/api/minutes/${minutesId}/bookmark`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        console.log('북마크 목록 res : ', res);
        res.forEach((bookmark) => {
          setBookmarkState({
            ...bookmarkState,
            [bookmark.sentenceId]: !bookmarkState[bookmark.sentenceId],
          });
        });
        console.log('변경 북마크 state : ', bookmarkState);
      }
    })
    .catch((err) => console.log(err));
};
