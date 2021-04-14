import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const Container = styled.div`
  position: relative;
  background: ${palette.white};
  border: ${palette.gray2};
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 21;
  min-width: 420px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${palette.black};
  font-weight: bold;
  margin-top: 2rem;
`;

const CloseBtn = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const BtnWrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;

const OkBtn = styled.button`
  width: 140px;
  height: 60px;
  background: ${palette.orange1};
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

function EnterConferenceModal({ ModalOff, args }) {
  return (
    <Container>
      <Title>회의 참가</Title>

      <BtnWrapper>
        <OkBtn>회의 참가</OkBtn>
        <CancleBtn onClick={ModalOff}>취소</CancleBtn>
      </BtnWrapper>
      <CloseBtn onClick={ModalOff}>
        <img src="/icons/closeBtn.png" alt="" />
      </CloseBtn>
    </Container>
  );
}

export default EnterConferenceModal;
