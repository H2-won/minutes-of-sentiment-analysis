import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  width: 240px;
  height: 160px;
  background: ${palette.white};
  color: ${palette.orange1};
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: 0.2s all;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  & + & {
    margin-left: 180px;
  }

  i {
    margin-bottom: 16px;
  }

  &:hover {
    color: ${palette.white};
    background: ${palette.orange1};
    cursor: pointer;
  }
`;

function ButtonWrap() {
  return (
    <Wrapper>
      <Button>
        <i class="far fa-plus-square"></i>회의 생성
      </Button>
      <Button>
        <i class="fas fa-sign-in-alt"></i>회의 참가
      </Button>
      <Button>
        <i class="fas fa-list"></i>회의록 리스트
      </Button>
    </Wrapper>
  );
}

export default ButtonWrap;
