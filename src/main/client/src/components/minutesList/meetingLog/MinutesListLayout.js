import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMinutesList } from '../../../controllers/meetingLog';
import MeetingLog from './MeetingLog';

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;

  a {
    margin: 2rem 3rem;
  }
`;

function MinutesListLayout() {
  const [minutesList, setMinutesList] = useState([]);
  let test;

  useEffect(() => {
    // test = getMinutesList(localStorage.getItem('userId')) || [];
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('accessToken');
    fetch(`/api/user/${userId}/minutes`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    })
        .then((res) => res.json())
        .then((res) => {
          console.log('회의록 리스트 : ', res);
          setMinutesList(res);
        })
        .catch((err) => {
          console.log(err);
          return [];
        });
  }, []);
  // const meetingLogs = [
  //   {
  //     minutesId: 1,
  //     title: '캡스톤 디자인 회의',
  //     keywords: ['발표', '설계', '구조'],
  //     createdDate: '2021-04-22',
  //     pictures: [
  //       'profile1.jpg',
  //       'profile2.jpg',
  //       'profile3.jpg',
  //       'profile4.jpg',
  //     ],
  //     meetingCode: 'qweasd',
  //     happy: '6.25',
  //     emotionless: '56.25',
  //     sad: '37.5',
  //     angry: '0',
  //   },
  //   {
  //     minutesId: 2,
  //     title: '캡스톤 디자인 회의',
  //     keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
  //     createdDate: '2021-04-21',
  //     pictures: [
  //       'profile1.jpg',
  //       'profile2.jpg',
  //       'profile3.jpg',
  //       'profile4.jpg',
  //     ],
  //     meetingCode: 'qweasd',
  //     happy: '56.25',
  //     emotionless: '6.25',
  //     sad: '37.5',
  //     angry: '0',
  //   },
  //   {
  //     minutesId: 3,
  //     title: '캡스톤 디자인 회의',
  //     keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
  //     createdDate: '2021-04-19',
  //     pictures: [
  //       'profile1.jpg',
  //       'profile2.jpg',
  //       'profile3.jpg',
  //       'profile4.jpg',
  //     ],
  //     meetingCode: 'qweasd',
  //     happy: '6.25',
  //     emotionless: '56.25',
  //     sad: '9.5',
  //     angry: '0',
  //   },
  //   {
  //     minutesId: 4,
  //     title: '캡스톤 디자인 회의',
  //     keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
  //     createdDate: '2021-04-17',
  //     pictures: [
  //       'profile1.jpg',
  //       'profile2.jpg',
  //       'profile3.jpg',
  //       'profile4.jpg',
  //     ],
  //     meetingCode: 'qweasd',
  //     happy: '6.25',
  //     emotionless: '56.25',
  //     sad: '1.5',
  //     angry: '16.5',
  //   },
  //   {
  //     minutesId: 5,
  //     title: '캡스톤 디자인 회의',
  //     keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
  //     createdDate: '2021-03-29',
  //     pictures: [
  //       'profile1.jpg',
  //       'profile2.jpg',
  //       'profile3.jpg',
  //       'profile4.jpg',
  //     ],
  //     meetingCode: 'qweasd',
  //     happy: '6.25',
  //     emotionless: '56.25',
  //     sad: '37.5',
  //     angry: '0',
  //   },
  //   {
  //     minutesId: 6,
  //     title: '캡스톤 디자인 회의',
  //     keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
  //     createdDate: '2021-03-21',
  //     pictures: [
  //       'profile1.jpg',
  //       'profile2.jpg',
  //       'profile3.jpg',
  //       'profile4.jpg',
  //     ],
  //     meetingCode: 'qweasd',
  //     happy: '6.25',
  //     emotionless: '56.25',
  //     sad: '37.5',
  //     angry: '0',
  //   },
  //   {
  //     minutesId: 7,
  //     title: '캡스톤 디자인 회의',
  //     keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
  //     createdDate: '2021-03-21',
  //     pictures: [
  //       'profile1.jpg',
  //       'profile2.jpg',
  //       'profile3.jpg',
  //       'profile4.jpg',
  //     ],
  //     meetingCode: 'qweasd',
  //     happy: '6.25',
  //     emotionless: '56.25',
  //     sad: '37.5',
  //     angry: '0',
  //   },
  //   {
  //     minutesId: 8,
  //     title: '캡스톤 디자인 회의',
  //     keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
  //     createdDate: '2021-03-21',
  //     pictures: [
  //       'profile1.jpg',
  //       'profile2.jpg',
  //       'profile3.jpg',
  //       'profile4.jpg',
  //     ],
  //     meetingCode: 'qweasd',
  //     happy: '56.25',
  //     emotionless: '6.25',
  //     sad: '37.5',
  //     angry: '0',
  //   },
  //   {
  //     minutesId: 9,
  //     title: '캡스톤 디자인 회의',
  //     keywords: ['발표', '설계', '구조', '캡스톤', '디비'],
  //     createdDate: '2021-03-21',
  //     pictures: [
  //       'profile1.jpg',
  //       'profile2.jpg',
  //       'profile3.jpg',
  //       'profile4.jpg',
  //     ],
  //     meetingCode: 'qweasd',
  //     happy: '6.25',
  //     emotionless: '56.25',
  //     sad: '37.5',
  //     angry: '0',
  //   },
  // ];
  return (
    <Container>
      <div>참여한 회의가 없습니다.</div>
      {minutesList && minutesList.map((meetingLog) => (
        <MeetingLog key={meetingLog.minutesId} meetingLog={meetingLog} />
      ))}
    </Container>
  );
}

export default MinutesListLayout;
