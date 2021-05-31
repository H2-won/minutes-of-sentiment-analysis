import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Scatter } from 'react-chartjs-2';

const Container = styled.div`
  position: relative;
  height: 100%;
  margin: 0 2rem 1rem;
  background: ${palette.white};
  border-radius: 8px;
  border: 0.5px solid ${palette.gray2};

  h2 {
    font-size: 20px;
    margin: 2rem;
  }

  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${palette.gray1};
  }
`;

const GraphWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8rem;
  margin-bottom: 3rem;
`;

const KeywordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10rem;

  margin-bottom: 3rem;
`;

const Interval = styled.div`
  position: relative;
  width: 100%;
  font-size: 18px;
  border: 0.5px solid ${palette.gray2};

  .interval {
    display: flex;
    justify-content: center;
    border-bottom: 0.5px solid ${palette.gray2};
    padding: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      margin: 1rem;
    }
    .orange {
      color: ${palette.orange1};
    }
  }
`;

const emos = ['슬픔', '중립', '기쁨', '화남'];

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: '감정 그래프',
    },
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 12,
        boxWidth: 12,
        usePointStyle: true,
      },
    },
  },
  scales: {
    xAxes: {
      ticks: {
        callback: function (value) {
          // return parseInt(value/3600) + ':' + parseInt((value%3600)/60) + ':' + parseInt(value%60);
          return (
            ('0' + parseInt(value / 3600)).slice(-2) +
            ':' +
            ('0' + parseInt((value % 3600) / 60)).slice(-2) +
            ':' +
            ('0' + parseInt(value % 60)).slice(-2)
          );
        },
      },
    },
    yAxes: {
      max: 3,
      min: 0,
      ticks: {
        callback: function (value) {
          if (value % 1 === 0) return emos[value];
        },
      },
    },
  },
};

function GraphAndKeyword({ id }) {
  const [data, setData] = useState({});

  // ----------------- 구간별 키워드 ------------------
  const [intervalKeyword, setIntervalKeyword] = useState({
    id: 1,
    interval1Keywords: '회의록 학습 데이터',
    interval2Keywords: '키워드 분석 용량',
    interval3Keywords: '감정 학습 데이터',
  });

  useEffect(() => {
    // graph 그리기 위한 get API
    fetch(`/api/minutes/${id}/sentences`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        var info = {};
        for (var i = 0; i < res.length; i++) {
          if (!(res[i].userName in info)) info[res[i].userName] = [];

          var [h, m, s] = res[i].createdTime.split(':');
          info[res[i].userName].push({
            x: h * 1 * 3600 + m * 1 * 60 + s * 1,
            y: emos.indexOf(res[i].emotion),
          });
        }
        var datasets = [];
        for (let key in info) {
          var randomColor = Math.floor(Math.random() * 16777215).toString(16);
          datasets.push({
            label: key,
            data: info[key],
            borderColor: '#' + randomColor,
            backgroundColor: '#' + randomColor,
            pointStyle: 'circle',
            pointRadius: 5,
          });
        }
        setData({ datasets: datasets });
      });

    // 구간별 키워드를 위한 get API
    fetch(
      `/api/minutes/${localStorage.getItem('minutesId')}/interval-keywords`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
      },
    )
      .then((res) => res.json())
      .then((res) => setIntervalKeyword(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h2>감정 그래프</h2>
      <GraphWrapper>
        <Scatter data={data} options={options} type={'scatter'} />
      </GraphWrapper>
      <h2>구간 별 키워드</h2>
      <KeywordWrapper>
        <Interval>
          <span className="interval">구간 1</span>
          <div>
            <span className="orange">
              {intervalKeyword.interval1Keywords.split(' ')[0]}
            </span>
            <span>{intervalKeyword.interval1Keywords.split(' ')[1]}</span>
            <span>{intervalKeyword.interval1Keywords.split(' ')[2]}</span>
          </div>
        </Interval>
        <Interval>
          <span className="interval">구간 2</span>
          <div>
            <span className="orange">
              {intervalKeyword.interval2Keywords.split(' ')[0]}
            </span>
            <span>{intervalKeyword.interval2Keywords.split(' ')[1]}</span>
            <span>{intervalKeyword.interval2Keywords.split(' ')[2]}</span>
          </div>
        </Interval>
        <Interval>
          <span className="interval">구간 3</span>
          <div>
            <span className="orange">
              {intervalKeyword.interval3Keywords.split(' ')[0]}
            </span>
            <span>{intervalKeyword.interval3Keywords.split(' ')[1]}</span>
            <span>{intervalKeyword.interval3Keywords.split(' ')[2]}</span>
          </div>
        </Interval>
      </KeywordWrapper>
    </Container>
  );
}

export default GraphAndKeyword;
