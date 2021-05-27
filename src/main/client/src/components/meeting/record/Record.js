import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { HwfirebaseDatabaseRef } from '../../../firebase';
import { useDispatch } from 'react-redux';
import AddBookmarkModal from '../../modal/AddBookmarkModal';
import { openModal } from '../../../modules/modal';

const Layout = styled.div`
  margin-top: 32px;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 2rem 3rem;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${palette.black};
`;

const Time = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 14px;
  font-weight: 400;
  color: ${palette.gray3};
`;

const Text = styled.div`
  padding: 0.75rem 1.5rem;
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
  border-radius: 4px;

  color: ${palette.black};
  background: ${palette.gray1};
  ${({ emotion }) =>
    emotion === '기쁨'
      ? css`
          background: ${palette.yellow};
        `
      : emotion === '슬픔'
      ? css`
          background: ${palette.skyblue};
        `
      : emotion === '화남'
      ? css`
          background: ${palette.red2};
        `
      : emotion}
`;

const AddBookmarkBtn = styled.div`
  z-index: 10;
  position: absolute;
  right: 30px;
  top: 40px;

  background: ${palette.white};
  border: 0.5px solid ${palette.gray2};
  color: ${palette.gray4};
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  img {
    margin-right: 1rem;
  }

  cursor: pointer;
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
        <Wrapper
          id={record.sentence_id}
          key={index}
          onContextMenu={(e) => {
            // console.log('addBtnState : ', addBtnState);
            // console.log('recordData : ', recordData);
            e.preventDefault();
            onContextMenu(index);
          }}
        >
          <Name>{record.sender_name}</Name>
          <Time>{record.time}</Time>
          <Text emotion={record.emotion}>{record.text}</Text>
          {addBtnState[index] && (
            <AddBookmarkBtn
              id={index + 1}
              onClick={onClickAddBookmark}
              className={'addMenu'}
            >
              <img src="/icons/ic_bookmark_gray.png" alt="" />
              북마크 등록
            </AddBookmarkBtn>
          )}
        </Wrapper>
      ))}
    </Layout>
  );
}

export default React.memo(Record);
