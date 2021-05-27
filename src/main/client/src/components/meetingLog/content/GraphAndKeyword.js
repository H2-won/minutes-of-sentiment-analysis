import React from 'react';
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
`;

const GraphWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 45%;
`;

const KeywordWrapper = styled.div`
  position: relative;
`;

const emos = ['화남', '기쁨', '중립', '슬픔'];

const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: '감정 그래프'
        },
        legend: {
            position: 'bottom',
            labels: {
                fontSize: 12,
                boxWidth: 12,
                usePointStyle: true,
            }
        }
    },
    scales: {
        xAxes: {
            ticks: {
                callback: function (value) {
                    return parseInt(value/3600) + ':' + parseInt((value%3600)/60) + ':' + parseInt(value%60);
                }
            }
        },
        yAxes: {
            ticks: {
                callback: function (value) {
                    if (value % 1 === 0)
                        return emos[value];
                }
            }
        }
    }
}

var data = {};

function GraphAndKeyword({id}) {

    const a = fetch(`/api/minutes/${id}/sentences`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
        },
    })
        .then(res => res.json())
        .then(res => {
            var info = {}
            for(var i=0;i<res.length;i++) {
                if (!(res[i].userName in info))
                    info[res[i].userName] = [];

                info[res[i].userName].push({
                    x: res[i].createdTime,
                    y: emos.indexOf(res[i].emotion)
                })
            }
            var datasets = [];
            for (let key in info) {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                datasets.push({
                    label: key,
                    data: info[key],
                    fill: false,
                    borderColor: '#' + randomColor,
                    backgroundColor: '#' + randomColor,
                    pointStyle: 'circle',
                    pointRadius: 5
                })
            }
            data['datasets'] = datasets;
        });

  return (
    <Container>
      <h2>감정 그래프</h2>
      <GraphWrapper>
          <Scatter data={data} options={options} type={"scatter"}/>
      </GraphWrapper>
      <h2>구간 별 키워드</h2>
      <KeywordWrapper></KeywordWrapper>
    </Container>
  );
}

export default GraphAndKeyword;
