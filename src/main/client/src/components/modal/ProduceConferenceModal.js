import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import connection from '../meeting/RtcConnection';
import * as Meeting from '../../controllers/meeting';

const Container = styled.div`
  position: relative;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  .subTitle {
    font-size: 18px;
    font-weight: bold;
    color: ${palette.black};
    margin-right: 2rem;
  }

  div {
    width: 360px;
    padding: 0.75rem;
    font-size: 18px;
    color: ${palette.gray4};
  }

  input {
    height: 36px;
    width: 360px;
    font-size: 18px;
    color: ${palette.gray4};
    border: 0.5px solid ${palette.gray2};
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  & + & {
    margin-top: 1.5rem;
  }
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
  cursor: pointer;
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

function ProduceConferenceModal({ ModalOff, args }) {
  const [titleValue, setTitleValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const onTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const onPwChange = (e) => {
    setPwValue(e.target.value);
  };

  const produceConferenceAPI = () => {
    Meeting.produceConference(titleValue, pwValue, connection);
  };

  const openMeetingRoom = () => {
    ModalOff();
    produceConferenceAPI();
  };

  return (
    <Container>
      <ContentWrapper>
        <span className="subTitle">회의 제목</span>
        <input type="text" maxLength="24" onChange={onTitleChange} />
      </ContentWrapper>
      <ContentWrapper>
        <span className="subTitle">비밀번호</span>
        <input type="password" maxLength="24" onChange={onPwChange} />
      </ContentWrapper>
      <BtnWrapper>
        <OkBtn
          color={args.okBtnBackgroundColor}
          onClick={() => openMeetingRoom()}
        >
          {args.okBtnText}
        </OkBtn>
        <CancleBtn onClick={ModalOff}>취소</CancleBtn>
      </BtnWrapper>
    </Container>
  );
}

export default ProduceConferenceModal;
