import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
// import {useAsync} from 'react-async';
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
    emotion === '행복'
      ? css`
          background: ${palette.yellow};
        `
      : emotion === '슬픔'
      ? css`
          background: ${palette.skyblue};
        `
      : emotion === '분노'
      ? css`
          background: ${palette.red2};
        `
      : emotion}
`;

const AddBookmarkBtn = styled.div`
  z-index: 100;
  position: absolute;
  right: 30px;
  top: 40px;

  background: ${palette.white};
  border: 0.5px solid ${palette.gray2};
  color: ${palette.gray4};
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  img {
    margin-right: 1rem;
  }
`;

function Record() {
  const [recordData, setRecordData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [addBtnState, setAddBtnState] = useState([]);

  const readMessage = (data) => {
    const getData = data.val();
    console.log('get data : ', getData);
    setRecordData((recordData) => [...recordData, getData]);
    console.log('recordData : ', recordData);
  };

  useEffect(() => {
    gyubin.on('child_added', readMessage);
    // setDataLength(7);
  }, []);

  useEffect(() => {
    console.log('change recordData : ', recordData);
    setAddBtnState([false * dataLength]);
    console.log(addBtnState);
  }, [dataLength]);

  return (
    <Layout>
      {recordData.map((record, index) => (
        <Wrapper id={record.id} key={index}>
          <Name>{record.sender_name}</Name>
          <Time>{record.time}</Time>
          <Text emotion={record.emotion}>{record.text}</Text>

          {addBtnState[index] && (
            <AddBookmarkBtn>
              <img src="/icons/ic_bookmark_gray.png" />
              북마크 등록
            </AddBookmarkBtn>
          )}
        </Wrapper>
      ))}
    </Layout>
  );
}

export default React.memo(Record);
