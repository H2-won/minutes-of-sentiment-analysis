import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Pie } from 'react-chartjs-2';

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
  const [emotions, setEmotions] = useState([]);
  const [emotionRatio, setEmotionRatio] = useState([]);
  const [maxEmotion, setMaxEmotion] = useState('무감정');
  const [emotionData, setEmotionData] = useState({
    // labels: ['무감정', '기쁨', '화남', '슬픔'],
    datasets: [
      {
        data: emotionRatio,
        backgroundColor: [
          `${palette.gray2}`,
          `${palette.yellow}`,
          `${palette.red2}`,
          `${palette.skyblue}`,
        ],
        // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#ff653f'],
      },
    ],
  });

  const [keywords, setKeywords] = useState(['1','2','3','4','5']);
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
    // 전체 감정 api
    fetch(`/api/minutes/${localStorage.getItem('minutesId')}/total-emotions`, {
      method: 'GET',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('emotion Info:', res);
        setEmotions(res);
        // 비율 Ratio에 넣어주기
        setEmotionRatio([...emotionRatio, res.emotionless]);
        setEmotionRatio([...emotionRatio, res.happy]);
        setEmotionRatio([...emotionRatio, res.angry]);
        setEmotionRatio([...emotionRatio, res.sad]);
        console.log('emotionRatio : ', emotionRatio);

        // 주요 감정, 퍼센트 구하기
        let max = 0;
        let maxIndex = 0;
        emotionRatio.forEach((ratio, index) => {
          if (max < ratio) {
            max = ratio;
            maxIndex = index;
          }
        });
        if (maxIndex === 0) setMaxEmotion('무감정');
        else if (maxIndex === 1) setMaxEmotion('기쁨');
        else if (maxIndex === 2) setMaxEmotion('화남');
        else if (maxIndex === 3) setMaxEmotion('슬픔');

        // emotoinData 설정
        setEmotionData({
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
      })
      .catch((err) => console.log(err));

    // 전체 키워드 api
    fetch(`/api/minutes/${localStorage.getItem('minutesId')}/total-keywords`, {
      method: 'GET',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Keywords Info:', res);
        setKeywords(res.keywords);
        // 뒤에 숫자 비율만 Ratio에 넣어주기
        res.keywords.forEach((keyword) => {
          keywordRatio.push(keyword.split('_')[1]);
        });
        console.log('keywordRatio:', keywordRatio);
        setKeywordData({
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
      })
      .catch((err) => console.log(err));
  }, []);

  // const emotionData = {
  //   // labels: ['무감정', '기쁨', '화남', '슬픔'],
  //   datasets: [
  //     {
  //       data: emotionRatio,
  //       backgroundColor: [
  //         `${palette.gray2}`,
  //         `${palette.yellow}`,
  //         `${palette.red2}`,
  //         `${palette.skyblue}`,
  //       ],
  //       // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#ff653f'],
  //     },
  //   ],
  // };

  // const keywordData = {
  //   datasets: [
  //     {
  //       data: keywordRatio,
  //       backgroundColor: [
  //         `${palette.gray2}`,
  //         `${palette.yellow}`,
  //         `${palette.red2}`,
  //         `${palette.skyblue}`,
  //         `${palette.green}`,
  //       ],
  //     },
  //   ],
  // };

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
