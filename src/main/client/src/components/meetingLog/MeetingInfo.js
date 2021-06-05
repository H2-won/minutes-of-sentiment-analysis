import React, { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Container = styled.div`
  margin: 2rem;
  background: ${palette.white};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 8px;
  border: 0.5px solid ${palette.gray2};

  div {
    width: 44.5%;
    margin: 1.25rem 2rem;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 2rem;
`;

const Description = styled.span`
  font-size: 18px;
`;

function MeetingInfo() {
  const meetingInfomation = {
    id: 1,
    title: '캡스톤 디자인 회의록 1',
    createdDate: '2021.03.29',
    progressTime: '00:06:35',
    userNameList: ['방규빈', '조하현', '임희원', '남기복'],
  };

  const meetingInfo =
    useSelector((state) => state.meetingLog.meetingInfo, shallowEqual) ||
    meetingInfomation;
  // console.log('meetingInfo:', meetingInfo);

  return (
    <Container>
      <div>
        <Title>회의 제목</Title>
        <Description>{meetingInfo.title}</Description>
      </div>
      <div>
        <Title>회의 시간</Title>
        <Description>{meetingInfo.progressTime}</Description>
      </div>
      <div>
        <Title>회의 일시</Title>
        <Description>{meetingInfo.createdDate}</Description>
      </div>
      <div>
        <Title>참가자</Title>
        {meetingInfo.userNameList.map((userName, index) => (
          <Description key={index}>{userName} </Description>
        ))}
      </div>
    </Container>
  );
}

export default React.memo(MeetingInfo);
