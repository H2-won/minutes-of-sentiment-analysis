import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { openModal } from '../../../modules/modal';
import MinutesInquiryModal from '../../modal/MinutesInquiryModal';

const Button = styled.button`
  width: 200px;
  height: 50px;
  background: ${palette.orange1};
  color: ${palette.white};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 110px;
`;

function LookupByCodeBtn() {
  const dispatch = useDispatch();
  const onClickLookup = () => {
    dispatch(openModal('MINUTES_INQUIRY', MinutesInquiryModal, {}));
  };
  return <Button onClick={() => onClickLookup()}>회의 코드로 조회</Button>;
}

export default LookupByCodeBtn;
