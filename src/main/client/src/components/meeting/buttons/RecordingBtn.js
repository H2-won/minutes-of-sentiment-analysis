import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { openModal } from '../../../modules/modal';
import StartRecordingModal from '../../modal/StartRecordingModal';
import StopRecordingModal from '../../modal/StopRecordingModal';

const Button = styled.button`
  width: 180px;
  height: 60px;
  ${({ state }) =>
    state === 'default'
      ? css`
          background: ${palette.orange1};
        `
      : state === 'recording'
      ? css`
          background: ${palette.red};
        `
      : css`
          background: ${palette.gray2};
          cursor: default;
        `}
  color: ${palette.white};
  font-size: 20px;
  font-weight: bold;

  i {
    margin-right: 2rem;
  }
`;

function RecordingBtn() {
  const [recordState, setRecordState] = useState('default');
  const dispatch = useDispatch();
  const onClickRecording = () => {
    if (recordState === 'default') {
      dispatch(
        openModal('START_RECORDING', StartRecordingModal, {
          title: '기록을 시작하시겠습니까?',
          okBtnText: '기록 시작',
          okBtnBackgroundColor: 'orange',
          setRecordState,
        }),
      );
    } else if (recordState === 'recording') {
      dispatch(
        openModal('STOP_RECORDING', StopRecordingModal, {
          title: '기록을 종료하시겠습니까?',
          okBtnText: '기록 종료',
          okBtnBackgroundColor: 'red',
          setRecordState,
        }),
      );
    }
  };

  return (
    <Button onClick={onClickRecording} state={recordState}>
      {recordState === 'default' ? (
        <>
          <i className="fas fa-video"></i>기록 시작
        </>
      ) : (
        <>
          <i className="fas fa-stop"></i>기록 종료
        </>
      )}
    </Button>
  );
}

export default RecordingBtn;
