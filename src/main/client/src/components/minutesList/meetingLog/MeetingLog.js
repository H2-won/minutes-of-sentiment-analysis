import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../lib/styles/palette';

const Container = styled.div`
  position: relative;
  min-width: 520px;
  min-height: 180px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  background: ${palette.white};
  margin: 2rem 3rem;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Title = styled.h2`
  color: ${palette.black};
  font-size: 24px;
  font-weight: bold;
`;

const KeywordsWrapper = styled.div`
  margin: 20px 0 2rem 0;
  position: flex;
  flex-wrap: wrap;
`;

const Keyword = styled.span`
  color: ${palette.white};
  background: ${palette.orange1};
  padding: 6px 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;

  & + & {
    margin-left: 16px;
  }
`;

const Emotion = styled.span`
  color: ${palette.white};
  background: ${palette.gray3};
  padding: 6px 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 14px;

  ${({ emotion }) =>
    emotion === '기쁨'
      ? css`
          background: #ffe066;
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

const Date = styled.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 14px;
  color: ${palette.gray3};
`;

const EnterBtnWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1rem;
  color: ${palette.gray3};
`;

const UsersWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const UserImg = styled.img`
  width: 2rem;
  height: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 50%;

  transform: ${({ index }) => `translateX(calc(${-index} * 50%))`};
`;

function MeetingLogWrapper({
  // minutesId,
  // title,
  // keywords,
  // pictures,
  // createdDate,
  // meetingCode,
  // happy,
  // emotionless,
  // sad,
  // angry,
  meetingLog,
}) {
  const [maxEmotion, setMaxEmotion] = useState('무감정');
  const emotionless = parseInt(meetingLog.emotionless);
  const emotions = [
    { emotion: '기쁨', value: parseInt(meetingLog.happy) },
    { emotion: '슬픔', value: parseInt(meetingLog.sad) },
    { emotion: '화남', value: parseInt(meetingLog.angry) },
  ];

  useEffect(() => {
    let max = 0;
    emotions.forEach((emotion) => {
      if (max < emotion.value) {
        max = emotion.value;
        setMaxEmotion(emotion.emotion);
      }
    });

    // 최대값이 중립의 value값보다 크거나 15보다 크면 해당 감정 유지, 그게 아니면 주요 감정 중립으로 바꿔줌
    if (!(max > emotionless || max > 15)) {
      setMaxEmotion('무감정');
    }
  }, []);

  return (
    <Link to={`/meetinglog/${meetingLog.meetingCode}`}>
      <Container id={meetingLog.minutesId}>
        <Title>{meetingLog.title}</Title>
        <EnterBtnWrapper>
          <i className="fas fa-chevron-right"></i>
        </EnterBtnWrapper>
        <KeywordsWrapper>
          {meetingLog.keywords.map((keyword, index) => (
            <Keyword key={index}>{keyword}</Keyword>
          ))}
        </KeywordsWrapper>
        <Emotion emotion={maxEmotion}>{maxEmotion}</Emotion>
        <Date>{meetingLog.createdDate}</Date>
        <UsersWrapper>
          {meetingLog.pictures.map((userImg, index) => (
            <UserImg
              key={index}
              src={`/images/${userImg}`}
              alt=""
              index={index}
            />
          ))}
        </UsersWrapper>
      </Container>
    </Link>
  );
}

export default MeetingLogWrapper;
