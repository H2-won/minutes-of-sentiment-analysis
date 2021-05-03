import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { openModal } from '../../../modules/modal';
import EndMeetingModal from '../../modal/EndMeetingModal';

const Button = styled.button`
  width: 180px;
  height: 60px;
  background: ${palette.red};
  color: ${palette.white};
  font-weight: bold;
  font-size: 20px;

  i {
    margin-right: 2rem;
  }
`;

function EndMeetingBtn() {
  const dispatch = useDispatch();
  const onEndMeeting = () => {
    dispatch(
      openModal('END_MEETING', EndMeetingModal, {
        title: '회의를 종료하시겠습니까?',
        okBtnText: '회의 종료',
        okBtnBackgroundColor: 'red',
      }),
    );
  };
  return (
    <Button onClick={() => onEndMeeting()}>
      <i className="fas fa-times"></i>회의 종료
    </Button>
  );
}

export default EndMeetingBtn;
