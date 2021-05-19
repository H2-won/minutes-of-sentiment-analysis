import React from 'react';
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
    width: 46%;
    margin: 1.5rem 2rem;
  }

  span {
    font-size: 20px;
  }
`;

const Title = styled.span`
  font-weight: bold;
  margin-right: 2rem;
`;

const Description = styled.span``;

function MeetingInfo() {
  const meetingInfomation = {
    id: 1,
    title: '캡스톤 디자인 회의록 1',
    date: '2021.03.29',
    time: '06:35',
    users: ['방규빈', '조하현', '임희원', '남기복'],
  };

  return (
    <Container>
      <div>
        <Title>회의 제목</Title>
        <Description>{meetingInfomation.title}</Description>
      </div>
      <div>
        <Title>회의 시간</Title>
        <Description>{meetingInfomation.time}</Description>
      </div>
      <div>
        <Title>회의 일시</Title>
        <Description>{meetingInfomation.date}</Description>
      </div>
      <div>
        <Title>참가자</Title>
        <Description>{meetingInfomation.users}</Description>
      </div>
    </Container>
  );
}

export default MeetingInfo;
