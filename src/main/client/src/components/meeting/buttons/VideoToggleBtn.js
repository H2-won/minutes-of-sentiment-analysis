import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { setMainVideo } from '../../../modules/meeting';

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
  const dispatch = useDispatch();
  const mainVideo = useSelector((state) => state.meeting.mainVideo);

  const onToggleVideo = () => {
    setVideoState(!videoState);

    console.log('main getVideoTracks = ', mainVideo.stream.getVideoTracks());
    // 비디오 트랙 toggle
    mainVideo.stream.getVideoTracks()[0].enabled =
      !mainVideo.stream.getVideoTracks()[0].enabled;

    // videotrack 상태 변경되었으니 다시 메인 비디오 set
    dispatch(setMainVideo(mainVideo));
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
