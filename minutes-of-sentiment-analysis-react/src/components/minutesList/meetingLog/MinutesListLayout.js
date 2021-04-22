import React from 'react';
import styled from 'styled-components';
import MeetingLog from './MeetingLog';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
  align-items: center;
  justify-content: center;
`;

function MinutesListLayout() {
  const meetingLogs = [
    {
      id: 1,
      title: '캡스톤 디자인 회의',
      keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
      date: '2021-04-22',
      users: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg'],
    },
    {
      id: 2,
      title: '캡스톤 디자인 회의',
      keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
      date: '2021-04-21',
      users: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg'],
    },
    {
      id: 3,
      title: '캡스톤 디자인 회의',
      keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
      date: '2021-04-19',
      users: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg'],
    },
    {
      id: 4,
      title: '캡스톤 디자인 회의',
      keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
      date: '2021-04-17',
      users: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg'],
    },
    {
      id: 5,
      title: '캡스톤 디자인 회의',
      keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
      date: '2021-03-29',
      users: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg'],
    },
    {
      id: 6,
      title: '캡스톤 디자인 회의',
      keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
      date: '2021-03-21',
      users: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg'],
    },
    {
      id: 7,
      title: '캡스톤 디자인 회의',
      keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
      date: '2021-03-21',
      users: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg'],
    },
    {
      id: 8,
      title: '캡스톤 디자인 회의',
      keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
      date: '2021-03-21',
      users: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg'],
    },
    {
      id: 9,
      title: '캡스톤 디자인 회의',
      keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
      date: '2021-03-21',
      users: ['profile1.jpg', 'profile2.jpg', 'profile3.jpg', 'profile4.jpg'],
    },
  ];
  return (
    <Container>
      {meetingLogs.map((meetingLog) => (
        <MeetingLog
          key={meetingLog.id}
          title={meetingLog.title}
          keywords={meetingLog.keywords}
          users={meetingLog.users}
          date={meetingLog.date}
        />
      ))}
    </Container>
  );
}

export default MinutesListLayout;
