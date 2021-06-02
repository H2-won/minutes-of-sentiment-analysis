import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  registrationBookmark,
  registrationAndUpdateBookmark,
} from '../../controllers/bookmark';
import palette from '../../lib/styles/palette';

const Container = styled.div`
  position: relative;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const OkBtn = styled.button`
  width: 140px;
  height: 60px;
  background: ${({ color }) =>
    color === 'orange'
      ? css`
          ${palette.orange1}
        `
      : css`
          ${palette.red}
        `};
  color: ${palette.white};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

const CancleBtn = styled.button`
  width: 140px;
  height: 60px;
  background: ${palette.gray2};
  color: ${palette.white};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  margin-left: 32px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0 1rem;

  .subTitle {
    font-size: 18px;
    font-weight: bold;
    color: ${palette.black};
    margin-right: 2rem;
  }

  input {
    height: 36px;
    width: 360px;
    font-size: 18px;
    color: ${palette.gray4};
    border: 0.5px solid ${palette.gray2};
    padding: 0.75rem;
    display: flex;
    align-items: center;
  }
`;

function AddBookmarkModal({ ModalOff, args }) {
  const [inputValue, setInputValue] = useState('');
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log('addBookmarkModal args :', args);

  const AddBookmark = () => {
    const userId = localStorage.getItem('userId');

    // 화상 회의 할때 북마크 등록 API
    if (args.page === 'meeting')
      registrationBookmark(userId, args.id, inputValue);
    // 회의록에서 북마크 등록 API
    else
      registrationAndUpdateBookmark(
        userId,
        args.id,
        inputValue,
        args.setBookmarkInfo,
        args.recordData,
        args.setRecordData,
        args.setAddBtnState,
      );

    ModalOff();
  };

  return (
    <Container>
      <ContentWrapper>
        <span className="subTitle">메모</span>
        <input type="text" onChange={onChange} />
      </ContentWrapper>
      <BtnWrapper>
        <OkBtn color={args.okBtnBackgroundColor} onClick={AddBookmark}>
          {args.okBtnText}
        </OkBtn>
        <CancleBtn onClick={ModalOff}>취소</CancleBtn>
      </BtnWrapper>
    </Container>
  );
}

export default React.memo(AddBookmarkModal);
