import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MinutesListWrapper({ children }) {
  return <Container>{children}</Container>;
}

export default MinutesListWrapper;
