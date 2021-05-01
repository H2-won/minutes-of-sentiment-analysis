import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { openModal } from '../../../modules/modal';
import StartRecodingModal from '../../modal/StartRecodingModal';
import StopRecodingModal from '../../modal/StopRecodingModal';

const Button = styled.button`
  width: 180px;
  height: 60px;
  ${({ state }) =>
    state === 'default'
      ? css`
          background: ${palette.orange1};
        `
      : state === 'recoding'
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

function RecodingBtn() {
  const [recodeState, setRecodeState] = useState('default');
  const dispatch = useDispatch();
  const onClickRecoding = () => {
    if (recodeState === 'default') {
      dispatch(
        openModal('START_RECODING', StartRecodingModal, {
          title: '기록을 시작하시겠습니까?',
          okBtnText: '기록 시작',
          okBtnBackgroundColor: 'orange',
          setRecodeState,
        }),
      );
    } else if (recodeState === 'recoding') {
      dispatch(
        openModal('STOP_RECODING', StopRecodingModal, {
          title: '기록을 종료하시겠습니까?',
          okBtnText: '기록 종료',
          okBtnBackgroundColor: 'red',
          setRecodeState,
        }),
      );
    }
  };
  return (
    <Button onClick={onClickRecoding} state={recodeState}>
      {recodeState === 'default' ? (
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

export default RecodingBtn;
