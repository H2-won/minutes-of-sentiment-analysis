import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const Button = styled.button`
  width: 180px;
  height: 60px;
  background: ${palette.white};
  color: ${palette.gray4};
  border: 1px solid ${palette.gray4};
  font-weight: bold;
  font-size: 20px;

  i {
    margin-right: 2rem;
  }
`;

function MuteToggleBtn() {
  return (
    <Button>
      <i className="fas fa-microphone"></i>음소거
      {/* <i class="fas fa-microphone-slash"></i> */}
    </Button>
  );
}

export default MuteToggleBtn;
