import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMinutesList } from '../../../controllers/minutesList';
// import { getMinutesList } from '../../../controllers/';
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
    getMinutesList(setMinutesList);
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
