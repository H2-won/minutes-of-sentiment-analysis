import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 125px 0;
`;

function TopWrapper({ children }) {
  return <Container>{children}</Container>;
}

export default TopWrapper;
