import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const Button = styled.button`
  width: 180px;
  height: 60px;
  background: ${palette.white};
  transition: 0.3s all;
  ${({ state }) =>
    state
      ? css`
          color: ${palette.orange1};
          border: 1px solid ${palette.orange1};
        `
      : css`
          color: ${palette.red};
          border: 1px solid ${palette.red};
        `}
  font-weight: bold;
  font-size: 20px;

  i {
    margin-right: 2rem;
  }
`;

function MuteToggleBtn() {
  const [muteState, setMuteState] = useState(true);
  const onToggleMute = () => {
    setMuteState(!muteState);
  };
  return (
    <Button onClick={onToggleMute} state={muteState}>
      {muteState ? (
        <>
          <i className="fas fa-microphone"></i>음소거
        </>
      ) : (
        <>
          <i className="fas fa-microphone-slash"></i>음소거 해제
        </>
      )}
    </Button>
  );
}

export default MuteToggleBtn;
