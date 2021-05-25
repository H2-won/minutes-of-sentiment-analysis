import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { gyubin } from '../../../firebase';

const Layout = styled.div`
  margin-top: 32px;
`;

const Wrapper = styled.div`
  position: relative;
  margin: 2rem 3rem;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${palette.black};
`;

const Time = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  font-size: 14px;
  font-weight: 400;
  color: ${palette.gray3};
`;

const Text = styled.div`
  padding: 0.75rem 1.5rem;
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
  border-radius: 4px;

  color: ${palette.black};
  background: ${palette.gray1};
  ${({ emotion }) =>
    emotion === '기쁨'
      ? css`
          background: ${palette.yellow};
        `
      : emotion === '슬픔'
      ? css`
          background: ${palette.skyblue};
        `
      : emotion === '화남'
      ? css`
          background: ${palette.red2};
        `
      : emotion}
`;

function Record() {
  const [recordData, setRecordData] = useState([]);

  const readMessage = (data) => {
    const getData = data.val();
    console.log('get data : ', getData);

    setRecordData((recordData) => [...recordData, getData]);

    // fetch('/api/sentence', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    //   },
    //   body: JSON.stringify({
    //     userId: getData.sender_id,
    //     minutesId: localMinutesId,
    //     content: getData.text,
    //     emotion: getData.emotion,
    //     createdTime:
    //       now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(),
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log('response sentence id : ', res);
    //     getData.id = res;

    //     // setRecordData([...recordData, getData]);
    //     // setRecordData((recordData) => [...recordData, res]);
    //   })
    //   .catch((err) => console.log(err));
    console.log('change recordData : ', recordData);
  };
  useEffect(() => {
    gyubin.on('child_added', readMessage);
  }, []);

  return (
    <Layout>
      {recordData.map((record, index) => (
        <Wrapper id={record.id} key={index}>
          <Name>{record.sender_name}</Name>
          <Time>{record.time}</Time>
          <Text emotion={record.emotion}>{record.text}</Text>
        </Wrapper>
      ))}
    </Layout>
  );
}

export default React.memo(Record);
