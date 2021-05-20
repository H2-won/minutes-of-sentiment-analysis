export const registrationBookmark = (userId, sentenceId, memo) => {
  fetch('/api/bookmark', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
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

export const modifyBookmark = (id, memo) => {
  fetch(`/api/bookmark/update/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      memo: memo,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log('북마크 수정 완료'))
    .catch((err) => console.log(err));
};

export const deleteBookmark = (id) => {
  fetch(`/api/bookmark/delete/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((res) => console.log('북마크 삭제 완료'))
    .catch((err) => console.log(err));
};

export const getBookmarkList = (id) => {
  fetch(`/api/minutes/${id}/bookmark`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.log(err));
};
