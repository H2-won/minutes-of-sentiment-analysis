import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 500px;
`;

function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

export default Wrapper;
