import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { lookupMeetingLogByCode } from '../../controllers/meetingLog';
import palette from '../../lib/styles/palette';
import { setMeetingInfo } from '../../modules/meetingLog';

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

  & + & {
    margin-top: 0.75rem;
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

function MinutesInquiryModal({ ModalOff, args }) {
  const [codeValue, setCodeValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const onChangeCode = (e) => {
    setCodeValue(e.target.value);
  };
  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const onClickLookup = () => {
    window.location.href = `/meetinglog/${codeValue}`;
    dispatch(setMeetingInfo(lookupMeetingLogByCode(codeValue, passwordValue)));
  };

  return (
    <Container>
      <ContentWrapper>
        <span className="subTitle">회의 코드</span>
        <input type="text" onChange={onChangeCode} />
      </ContentWrapper>
      <ContentWrapper>
        <span className="subTitle">비밀번호</span>
        <input type="password" onChange={onChangePassword} />
      </ContentWrapper>
      <BtnWrapper>
        <OkBtn color={args.okBtnBackgroundColor} onClick={onClickLookup}>
          {args.okBtnText}
        </OkBtn>
        <CancleBtn onClick={ModalOff}>취소</CancleBtn>
      </BtnWrapper>
    </Container>
  );
}

export default MinutesInquiryModal;
