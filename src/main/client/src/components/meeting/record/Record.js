import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

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
  const RecordsData = [
    {
      id: 1,
      name: '임희원',
      text: '안녕하세요.',
      time: '00:03',
      emotion: '기쁨',
    },
    {
      id: 2,
      name: '남기복',
      text: '안녕하세요.',
      time: '00:05',
      emotion: '무감정',
    },
    {
      id: 3,
      name: '조하현',
      text: '안녕하세요.',
      time: '00:08',
      emotion: '슬픔',
    },
    {
      id: 4,
      name: '방규빈',
      text: '안녕하세요.',
      time: '00:11',
      emotion: '무감정',
    },
    {
      id: 5,
      name: '임희원',
      text: '그럼 설계서 회의부터 시작해볼까요?',
      time: '00:17',
      emotion: '무감정',
    },
    {
      id: 6,
      name: '남기복',
      text: '그래요 설계서 중요하니까 먼저 시작하죠.',
      time: '00:20',
      emotion: '무감정',
    },
    {
      id: 7,
      name: '남기복',
      text: '순서는 아키텍처 디비 유아이 순서가 좋겠죠?',
      time: '00:23',
      emotion: '무감정',
    },
    {
      id: 8,
      name: '방규빈',
      text: '그것 보다는 이게 낫지 않아요?',
      time: '00:33',
      emotion: '화남',
    },
    {
      id: 9,
      name: '조하현',
      text: '음 저는 그거보다 저게 나은 것 같아요',
      time: '00:55',
      emotion: '화남',
    },
    {
      id: 10,
      name: '남기복',
      text: '그럼 이건 어때요?',
      time: '01:07',
      emotion: '기쁨',
    },
    {
      id: 11,
      name: '임희원',
      text: '오 좋은데요?',
      time: '01:10',
      emotion: '기쁨',
    },
  ];

  return (
    <Layout>
      {RecordsData.map((record) => (
        <Wrapper key={record.id}>
          <Name>{record.name}</Name>
          <Time>{record.time}</Time>
          <Text emotion={record.emotion}>{record.text}</Text>
        </Wrapper>
      ))}
    </Layout>
  );
}

export default Record;
