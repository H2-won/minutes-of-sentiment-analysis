import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const Container = styled.div`
  height: 100%;
  min-width: 232px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  background: ${palette.white};
`;

const TopMenuWrapper = styled.div`
  margin-top: 2rem;
`;

const BottomMenuWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.2s all;

  &:hover {
    background: ${palette.orange2};
    cursor: pointer;

    div {
      color: ${palette.orange1};
    }
  }

  ${({ active }) =>
    active &&
    css`
      background: ${palette.orange2};
      cursor: pointer;

      div {
        color: ${palette.orange1};
        font-weight: bold;
      }
    `}
`;

const Content = styled.div`
  margin-left: 4rem;
  font-size: 14px;
  font-weight: 400;
  color: ${palette.gray4};
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 20px;
    margin-right: 14px;
  }
`;

function Navigation({ activeMenuState, setActiveMenuState }) {
  const topMenus = [
    {
      id: 0,
      description: '한 눈에 보기',
      icon: <i className="fas fa-eye"></i>,
    },
    {
      id: 1,
      description: '북마크',
      icon: <i className="far fa-bookmark"></i>,
    },
    {
      id: 2,
      description: '총 정리',
      icon: <i className="fas fa-chart-pie"></i>,
    },
  ];
  const bottomMenus = [
    {
      id: 3,
      description: '회의록 리스트',
      icon: <i className="fas fa-reply"></i>,
      url: '/minuteslist',
    },
    {
      id: 4,
      description: '메인으로 가기',
      icon: <i className="fas fa-home"></i>,
      url: '/main',
    },
  ];

  const onClickMenu = (e) => {
    const id = e.target.id;
    setActiveMenuState(parseInt(id));
  };

  return (
    <Container>
      <TopMenuWrapper>
        {topMenus.map(({ id, icon, description }) => (
          <Wrapper
            key={id}
            active={id === activeMenuState}
            onClick={onClickMenu}
            id={id}
          >
            <Content id={id}>
              {icon}
              {description}
            </Content>
          </Wrapper>
        ))}
      </TopMenuWrapper>
      <BottomMenuWrapper>
        {bottomMenus.map(({ id, icon, description, url }) => (
          <Link to={url} key={id}>
            <Wrapper>
              <Content>
                {icon}
                {description}
              </Content>
            </Wrapper>
          </Link>
        ))}
      </BottomMenuWrapper>
    </Container>
  );
}

export default Navigation;
