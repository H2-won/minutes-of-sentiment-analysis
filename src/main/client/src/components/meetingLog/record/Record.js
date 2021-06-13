import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import AddBookmarkModal from '../../modal/AddBookmarkModal';
import { openModal } from '../../../modules/modal';
import Sentence from './Sentence';

const Layout = styled.div`
  margin-top: 32px;
`;

function Record({
  setBookmarkInfo,
  recordData,
  setRecordData,
  addBtnState,
  setAddBtnState,
}) {
  const dispatch = useDispatch();
  const body = document.querySelector('body');

  useEffect(() => {
    getRecordData(recordData, setRecordData, addBtnState, setAddBtnState);
  }, []);

  const onClickAddBookmark = (e) => {
    const sentenceId = e.currentTarget.parentNode.getAttribute('id');
    dispatch(
      openModal('ADD_BOOKMARK', AddBookmarkModal, {
        title: '북마크 등록',
        okBtnText: '등록',
        okBtnBackgroundColor: 'orange',
        id: sentenceId,
        page: 'meetingLog',
        setBookmarkInfo: setBookmarkInfo,
        recordData: recordData,
        setRecordData: setRecordData,
        addBtnState: addBtnState,
        setAddBtnState: setAddBtnState,
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
