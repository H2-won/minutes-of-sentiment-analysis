import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import AddBookmarkModal from '../../modal/AddBookmarkModal';
import { openModal } from '../../../modules/modal';
import Sentence from './Sentence';

const Layout = styled.div`
  margin-top: 32px;
`;

function Record() {
  const [recordData, setRecordData] = useState([]);
  const [addBtnState, setAddBtnState] = useState([]);
  const [bookmarkState, setBookmarkState] = useState([]);
  const dispatch = useDispatch();
  const body = document.querySelector('body');

  useEffect(() => {
    fetch(`/api/minutes/${localStorage.getItem('minutesId')}/sentences`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('recordData :', res);
        setRecordData(res);
        for (let i = 0; i < recordData.length; i++) {
          setAddBtnState((addBtnState) => [...addBtnState, false]);
          setBookmarkState((bookmarkState) => [...bookmarkState, false]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`/api/minutes/${localStorage.getItem('minutesId')}/bookmark`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res)
          res.forEach((bookmark) => {
            setBookmarkState({
              ...bookmarkState,
              [bookmark.sentenceId]: !bookmarkState[bookmark.sentenceId],
            });
          });
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickAddBookmark = (e) => {
    const sentenceId = e.target.parentNode.getAttribute('id');
    dispatch(
      openModal('ADD_BOOKMARK', AddBookmarkModal, {
        title: '북마크 등록',
        okBtnText: '등록',
        okBtnBackgroundColor: 'orange',
        id: sentenceId,
      }),
    );
  };

  const onCloseMenu = (e) => {
    const openBookmarkMenu = document.querySelector('.addMenu');
    if (
      openBookmarkMenu &&
      e.target !== openBookmarkMenu &&
      e.target.parentNode !== openBookmarkMenu
    ) {
      setAddBtnState({
        ...addBtnState,
        [openBookmarkMenu.getAttribute('id')]: false,
      });
      body.removeEventListener('click', onCloseMenu);
    }
  };

  const onContextMenu = (index) => {
    setAddBtnState({ ...addBtnState, [index]: !addBtnState[index] });
    body.addEventListener('click', onCloseMenu);
  };

  return (
    <Layout>
      {recordData.map((record, index) => (
        <Sentence
          key={index}
          record={record}
          index={index}
          onClickAddBookmark={onClickAddBookmark}
          onContextMenu={onContextMenu}
          addBtnState={addBtnState}
          bookmarkState={bookmarkState}
        />
      ))}
    </Layout>
  );
}

export default React.memo(Record);
