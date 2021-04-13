import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../lib/styles/palette';

const Background = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

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

const BtnContainer = styled.div`
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

  ${(props) =>
    props.color === 'red'
      ? css`
          background: ${palette.red};
        `
      : css`
          background: ${palette.orange1};
        `}
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

function Modal({
  title = '제목',
  // Content,
  okBtnText = '확인',
  okBtnColor = 'orange',
}) {
  return (
    <Background>
      <Container>
        <Title>{title}</Title>
        {/* <Content /> */}
        <BtnContainer>
          <OkBtn color={okBtnColor}>{okBtnText}</OkBtn>
          <CancleBtn>취소</CancleBtn>
        </BtnContainer>
        <CloseBtn>
          <img src="/icons/closeBtn.png" alt="" />
        </CloseBtn>
      </Container>
    </Background>
  );
}

export default Modal;
