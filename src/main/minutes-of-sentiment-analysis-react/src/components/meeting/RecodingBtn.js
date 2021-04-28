import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Button = styled.button`
  width: 180px;
  height: 60px;
  background: ${palette.orange1};
  color: ${palette.white};
  font-size: 20px;
  font-weight: bold;

  i {
    margin-right: 2rem;
  }
`;

function RecodingBtn() {
  return (
    <Button>
      <i className="fas fa-video"></i>기록 시작
    </Button>
  );
}

export default RecodingBtn;
