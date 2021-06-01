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
    .then((res) => console.log('북마크 등록 완료'))
    .catch((err) => console.log(err));
};

// 회의록에서 북마크 등록 API
export const registrationAndUpdateBookmark = (
  userId,
  sentenceId,
  memo,
  setBookmarkInfo,
) => {
  console.log('북마크 등록 api ', setBookmarkInfo);
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

export const deleteBookmark = (id, setBookmarkInfo) => {
  const token = localStorage.getItem('accessToken');
  fetch(`/api/bookmark/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      // setBookmarkInfo(bookmarkInfo.filter((info) => info.bookmarkId !== id));
      console.log('북마크 삭제 res :', res);
      setBookmarkInfo(res);
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
