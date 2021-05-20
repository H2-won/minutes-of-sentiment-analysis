import React from 'react';
import styled from 'styled-components';
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
  margin-top: 20px;
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

function MeetingLogWrapper({ title, keywords, users, date, code }) {
  return (
    <Link to={`/meetinglog/${code}`}>
      <Container>
        <Title>{title}</Title>
        <EnterBtnWrapper>
          <i className="fas fa-chevron-right"></i>
        </EnterBtnWrapper>
        <KeywordsWrapper>
          {keywords.map((keyword, index) => (
            <Keyword key={index}>{keyword}</Keyword>
          ))}
        </KeywordsWrapper>
        <Date>{date}</Date>
        <UsersWrapper>
          {users.map((user, index) => (
            <UserImg key={index} src={`/images/${user}`} alt="" index={index} />
          ))}
        </UsersWrapper>
      </Container>
    </Link>
  );
}

export default MeetingLogWrapper;
