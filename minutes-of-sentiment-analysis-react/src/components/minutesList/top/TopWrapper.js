import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
`;

function TopWrapper({ children }) {
  return <Container>{children}</Container>;
}

export default TopWrapper;
