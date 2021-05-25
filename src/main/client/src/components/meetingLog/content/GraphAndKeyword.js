import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const Container = styled.div`
  position: relative;
  height: 100%;
  margin: 0 2rem 1rem;
  background: ${palette.white};
  border-radius: 8px;
  border: 0.5px solid ${palette.gray2};

  h2 {
    font-size: 20px;
    margin: 2rem;
  }
`;

const GraphWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 45%;
`;

const KeywordWrapper = styled.div`
  position: relative;
`;

function GraphAndKeyword() {
  return (
    <Container>
      <h2>감정 그래프</h2>
      <GraphWrapper></GraphWrapper>
      <h2>구간 별 키워드</h2>
      <KeywordWrapper></KeywordWrapper>
    </Container>
  );
}

export default GraphAndKeyword;
