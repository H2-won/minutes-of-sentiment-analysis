import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { openModal } from '../../modules/modal';
import EnterConferenceModal from '../modal/EnterConferenceModal';
import ProduceConferenceModal from '../modal/ProduceConferenceModal';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  width: 240px;
  height: 160px;
  background: ${palette.white};
  color: ${palette.orange1};
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: 0.2s all;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  & + & {
    margin-left: 180px;
  }

  i {
    margin-bottom: 16px;
  }

  &:hover {
    color: ${palette.white};
    background: ${palette.orange1};
    cursor: pointer;

    a {
      color: ${palette.white};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    width: 100%;
    height: 100%;
    color: ${palette.orange1};
  }
`;

function ButtonWrap() {
  const dispatch = useDispatch();
  const onClickProduce = () => {
    dispatch(
      openModal('PRODUCE_CONFERENCE', ProduceConferenceModal, {
        title: '회의 생성',
        okBtnText: '회의 시작',
        okBtnBackgroundColor: 'orange',
      }),
    );
  };
  const onClickEnter = () => {
    dispatch(
      openModal('ENTER_CONFERENCE', EnterConferenceModal, {
        title: '회의 참가',
        okBtnText: '회의 입장',
        okBtnBackgroundColor: 'orange',
      }),
    );
  };

  return (
    <Wrapper>
      <Button onClick={() => onClickProduce()}>
        <i className="far fa-plus-square"></i>회의 생성
      </Button>
      <Button onClick={() => onClickEnter()}>
        <i className="fas fa-sign-in-alt"></i>회의 참가
      </Button>
      <Button>
        <Link to="/minuteslist">
          <i className="fas fa-list"></i>회의록 리스트
        </Link>
      </Button>
    </Wrapper>
  );
}

export default ButtonWrap;
