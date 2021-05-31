import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const Container = styled.div`
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

const BookmarkIcon = styled.img`
  position: absolute;
  width: 15px;
  left: -2rem;
  top: 3rem;
`;

function Sentence({
  record,
  index,
  onClickAddBookmark,
  onContextMenu,
  addBtnState,
  bookmarkState,
}) {
  const scrollToBottom = () => {
    const recordWrapper = document.querySelector('#recordWrapper');
    recordWrapper.scrollTo({
      top: recordWrapper.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(scrollToBottom, [record]);

  return (
    <Container
      id={record.id}
      key={index}
      onContextMenu={(e) => {
        e.preventDefault();
        onContextMenu(index);
      }}
    >
      <Name>{record.userName}</Name>
      <Time>{record.createdTime}</Time>
      <Text emotion={record.emotion}>{record.content}</Text>
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
      {/*{bookmarkState[index] && (*/}
      {/*  <BookmarkIcon id={index + 1} src="/icons/ic_bookmark_24px.png" alt="" />*/}
      {/*)}*/}
    </Container>
  );
}

export default React.memo(Sentence);
