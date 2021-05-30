import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { HwfirebaseDatabaseRef } from '../../../firebase';
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
  const dispatch = useDispatch();
  const body = document.querySelector('body');

  const readMessage = (data) => {
    const getData = data.val();
    setRecordData((recordData) => [...recordData, getData]);
  };

  useEffect(() => {
    HwfirebaseDatabaseRef.on('child_added', readMessage);
  }, []);

  useEffect(() => {
    if (recordData[0]) {
      // recordData.current.scrollIntoView({ behavior: 'smooth' });
      setAddBtnState((addBtnState) => [...addBtnState, false]);
    }
  }, [recordData]);

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
        />
      ))}
    </Layout>
  );
}

export default React.memo(Record);
