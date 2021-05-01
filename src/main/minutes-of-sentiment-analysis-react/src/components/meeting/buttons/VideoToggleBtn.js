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

function VideoToggleBtn() {
  const [videoState, setVideoState] = useState(true);
  const onToggleVideo = () => {
    setVideoState(!videoState);
  };
  return (
    <Button onClick={onToggleVideo} state={videoState}>
      {videoState ? (
        <>
          <i className="fas fa-video"></i>비디오 중지
        </>
      ) : (
        <>
          <i className="fas fa-video-slash"></i>비디오 시작
        </>
      )}
    </Button>
  );
}

export default VideoToggleBtn;
