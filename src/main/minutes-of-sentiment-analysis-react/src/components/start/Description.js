import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  span {
    font-size: 20px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Orange = styled.span`
  color: ${palette.orange1};
  font-weight: bold;
`;

function Description() {
  return (
    <Container>
      <span>인공지능을 이용한</span>
      <span>
        감정 분석이 결합된 <Bold>화상 회의, 회의록</Bold> 서비스
      </span>
      <span>
        화상 회의 후, 자동 작성된 <Orange>감정 회의록</Orange>을 경험해보세요.
      </span>
    </Container>
  );
}

export default Description;
