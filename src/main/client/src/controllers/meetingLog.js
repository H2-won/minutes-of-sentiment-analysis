import palette from '../lib/styles/palette';

export const lookupMeetingLogByCode = (code, pw) => {
  const token = localStorage.getItem('accessToken');

  fetch(`/api/minutes/${code}`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: pw,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('회의록 정보 : ', res);
      return res;
    })
    .catch((err) => console.log(err));
};

export const getMeetingLogInfo = (minutesId) => {
  const token = localStorage.getItem('accessToken');
  fetch(`/api/minutes/${minutesId}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('회의록 정보:', res);
      return res;
    })
    .catch((err) => console.log(err));
};

export const getGraphData = (id, emos, setData) => {
  const token = localStorage.getItem('accessToken');
  // graph 그리기 위한 get API
  fetch(`/api/minutes/${id}/sentences`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
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
};

export const getIntervalKeywordData = (setIntervalKeyword) => {
  const minutesId = localStorage.getItem('minutesId');
  const token = localStorage.getItem('accessToken');
  fetch(`/api/minutes/${minutesId}/interval-keywords`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      // console.log('interval keywords : ', res);
      setIntervalKeyword(res);
    })
    .catch((err) => console.log(err));
};

export const getAllEmotionData = (
  minutesId,
  token,
  emotionRatio,
  setEmotionRatio,
  setMaxEmotion,
  setEmotionData,
) => {
  fetch(`/api/minutes/${minutesId}/total-emotions`, {
    method: 'GET',
    Authorization: 'Bearer ' + token,
  })
    .then((res) => res.json())
    .then((res) => {
      // 비율 Ratio에 넣어주기
      emotionRatio.push(res.emotionless);
      emotionRatio.push(res.happy);
      emotionRatio.push(res.angry);
      emotionRatio.push(res.sad);
      setEmotionRatio(emotionRatio);

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
};

export const getAllKeywordData = (
  minutesId,
  token,
  setKeywords,
  keywordRatio,
  setKeywordData,
) => {
  fetch(`/api/minutes/${minutesId}/total-keywords`, {
    method: 'GET',
    Authorization: 'Bearer ' + token,
  })
    .then((res) => res.json())
    .then((res) => {
      setKeywords(res.keywords);
      // 뒤에 숫자 비율만 Ratio에 넣어주기
      res.keywords.forEach((keyword) => {
        keywordRatio.push(keyword.split('_')[1]);
      });
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
};

export const getRecordData = (
  recordData,
  setRecordData,
  addBtnState,
  setAddBtnState,
) => {
  const minutesId = localStorage.getItem('minutesId');
  const token = localStorage.getItem('accessToken');
  fetch(`/api/minutes/${minutesId}/sentences`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log('recordData :', res);
      setRecordData(res);
      for (let i = 0; i < recordData.length; i++) {
        setAddBtnState((addBtnState) => [...addBtnState, false]);
      }
    })
    .catch((err) => console.log(err));
};
