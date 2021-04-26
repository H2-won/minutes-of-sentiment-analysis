import React from 'react';
import styled from 'styled-components';
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
  padding: 3rem 3.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${palette.black};
  font-weight: bold;
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

function ModalBasicForm({ ModalOff, Content, args }) {
  return (
    <Container>
      <Title>{args.title}</Title>
      {<Content ModalOff={ModalOff} args={args} />}
      <CloseBtn onClick={ModalOff}>
        <img src="/icons/closeBtn.png" alt="" />
      </CloseBtn>
    </Container>
  );
}

export default ModalBasicForm;
