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
    margin: 2rem;
  }
`;

function MinutesListLayout() {
  const [minutesList, setMinutesList] = useState([]);

  useEffect(() => {
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
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {minutesList.map((meetingLog) => (
        <MeetingLog key={meetingLog.minutesId} meetingLog={meetingLog} />
      ))}
    </Container>
  );
}

export default MinutesListLayout;
