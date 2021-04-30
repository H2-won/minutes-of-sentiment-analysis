import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { openModal } from '../../../modules/modal';
import StartRecodingModal from '../../modal/StartRecodingModal';
import StopRecodingModal from '../../modal/StopRecodingModal';

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
  const { recoding, setRecoding } = useState(false);
  const dispatch = useDispatch();
  const onStartRecoding = () => {
    dispatch(
      openModal('START_RECODING', StartRecodingModal, {
        title: '기록을 시작하시겠습니까?',
        okBtnText: '기록 시작',
        okBtnBackgroundColor: 'orange',
      }),
    );
  };
  const onStopRecoding = () => {
    dispatch(
      openModal('STOP_RECODING', StopRecodingModal, {
        title: '기록을 종료하시겠습니까?',
        okBtnText: '기록 종료',
        okBtnBackgroundColor: 'red',
      }),
    );
  };
  return (
    <Button onClick={() => onStartRecoding()}>
      <i className="fas fa-video"></i>기록 시작
    </Button>
  );
}

export default RecodingBtn;
