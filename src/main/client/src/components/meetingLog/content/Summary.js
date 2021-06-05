import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Pie } from 'react-chartjs-2';
import {
  getAllEmotionData,
  getAllKeywordData,
} from '../../../controllers/meetingLog';

const Container = styled.div`
  position: relative;
  height: 100%;
  margin: 0 2rem;
  background: ${palette.white};
  border-radius: 8px;
  border: 0.5px solid ${palette.gray2};

  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${palette.gray1};
  }

  h2 {
    font-size: 20px;
    margin: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 5rem;
`;

const GraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  min-width: 400px;
  width: 75%;
  height: 400px;

  span {
    color: ${palette.black};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 8px;
    }
  }

  canvas {
    width: 300px !important;
    height: 300px !important;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80%;
  height: 70%;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
    font-size: 14px;
    color: ${palette.black};

    span {
      margin-right: 2rem;
      font-weight: normal;
    }
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }

  .color {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .gray {
    background: ${palette.gray2};
  }
  .yellow {
    background: ${palette.yellow};
  }
  .red {
    background: ${palette.red2};
  }
  .blue {
    background: ${palette.skyblue};
  }
  .green {
    background: ${palette.green};
  }

  .orange {
    color: ${palette.orange1};
  }
`;

const Comment = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${palette.orange1};
  margin: 2.5rem;
`;

function Summary() {
  const [emotionRatio, setEmotionRatio] = useState([]);
  const [maxEmotion, setMaxEmotion] = useState('무감정');
  const [emotionData, setEmotionData] = useState({
    datasets: [
      {
        data: emotionRatio,
        backgroundColor: [
          `${palette.gray2}`,
          `${palette.yellow}`,
          `${palette.red2}`,
          `${palette.skyblue}`,
        ],
      },
    ],
  });

  const [keywords, setKeywords] = useState(['1', '2', '3', '4', '5']);
  const keywordRatio = [];
  const [keywordData, setKeywordData] = useState({
    datasets: [
      {
        data: keywordRatio,
        backgroundColor: [
          `${palette.gray2}`,
          `${palette.yellow}`,
          `${palette.red2}`,
          `${palette.skyblue}`,
          `${palette.green}`,
        ],
      },
    ],
  });

  useEffect(() => {
    const minutesId = localStorage.getItem('minutesId');
    const token = localStorage.getItem('accessToken');
    // 전체 감정 api
    getAllEmotionData(
      minutesId,
      token,
      emotionRatio,
      setEmotionRatio,
      setMaxEmotion,
      setEmotionData,
    );

    // 전체 키워드 api
    getAllKeywordData(
      minutesId,
      token,
      setKeywords,
      keywordRatio,
      setKeywordData,
    );
  }, []);

  return (
    <Container>
      <h2>총 정리</h2>
      <ContentWrapper>
        <Content>
          <GraphWrapper>
            <span>
              <img src="/icons/ic_face.png" alt="" />
              주요 감정
            </span>
            <Pie data={emotionData} />
          </GraphWrapper>
          <Description>
            <div>
              <p className="color gray" />
              <span>무감정</span>
              <p className="color yellow" />
              <span>기쁨</span>
              <p className="color red" />
              <span> 화남</span>
              <p className="color blue" /> <span>슬픔</span>
            </div>
            <span>
              주요 감정은 <span className="orange">{maxEmotion}</span>(
              {parseInt(Math.max(...emotionRatio))}%) 입니다.
            </span>
          </Description>
        </Content>
        <Content>
          <GraphWrapper>
            <span>
              <img src="/icons/ic_key.png" alt="" />
              주요 키워드
            </span>
            <Pie data={keywordData} />
          </GraphWrapper>
          <Description>
            <div>
              <p className="color gray" />
              <span>{keywords[0].split('_')[0]}</span>
              <p className="color yellow" />
              <span>{keywords[1].split('_')[0]}</span>
              <p className="color red" />
              <span>{keywords[2].split('_')[0]}</span>
              <p className="color blue" />
              <span>{keywords[3].split('_')[0]}</span>
              <p className="color green" />
              <span>{keywords[4].split('_')[0]}</span>
            </div>
            <span>
              주요 키워드는{' '}
              <span className="orange">{keywords[0].split('_')[0]}</span>(
              {keywords[0].split('_')[1]}%) 입니다.
            </span>
          </Description>
        </Content>
      </ContentWrapper>
      <ContentWrapper>
        <Comment>
          " 다음 회의는 조금 더 활기차게 진행해보는 것이 어떨까요? "
        </Comment>
      </ContentWrapper>
    </Container>
  );
}

export default Summary;
