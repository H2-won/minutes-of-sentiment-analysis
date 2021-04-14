const firebaseConfig = {
    apiKey: "AIzaSyCAPq36ZvGSEcdGX9OXEmrMlh_Fd2h_1CA",
    authDomain: "emotional-minutes.firebaseapp.com",
    databaseURL: "https://emotional-minutes-default-rtdb.firebaseio.com",
    projectId: "emotional-minutes",
    storageBucket: "emotional-minutes.appspot.com",
    messagingSenderId: "16714778368",
    appId: "1:16714778368:web:f4d9f21b223a7b9878d5e5",
    measurementId: "G-H3H5BEWXPY"
};

const yourId = Math.floor(Math.random() * 1000000000);
firebase.initializeApp(firebaseConfig);
const database = firebase.database().ref();

const FIRST_CHAR = /\S/;
const TWO_LINE = /\n\n/g;
const ONE_LINE = /\n/g;

const recognition = new webkitSpeechRecognition();
const language = 'ko-KR';
const $btnMic = document.querySelector('#btn-mic');
const btnOpenRoom = document.querySelector('#open-room');
const btnJoinRoom = document.querySelector('#join-room');
const btnOpenOrJoinRoom = document.querySelector('#open-or-join-room');

let isRecognizing = false;
let ignoreEndProcess = false;
let finalTranscript = '';

recognition.continuous = true;
recognition.interimResults = true;

/**
 * 음성 인식 시작 처리
 */
recognition.onstart = function () {
    console.log('onstart', arguments);
    isRecognizing = true;
    $btnMic.className = 'on';
};

/**
 * 음성 인식 종료 처리
 */
recognition.onend = function () {
    console.log('onend', arguments);
    isRecognizing = false;

    if (ignoreEndProcess) {
        return false;
    }

    // DO end process
    $btnMic.className = 'off';
    if (!finalTranscript) {
        console.log('empty finalTranscript');
        return false;
    }
};

/**
 * 음성 인식 결과 처리
 */
recognition.onresult = function (event) {
    console.log('onresult', event);

    let interimTranscript = '';
    if (typeof event.results === 'undefined') {
        recognition.onend = null;
        recognition.stop();
        return;
    }

    for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
            finalTranscript += transcript;
            // 발화가 끝나면 데이터베이스에 저장
            let msg = database.push({
                sender: yourId,
                message: transcript
            });
            msg.remove();
        } else {
            interimTranscript += transcript;
        }
    }

    finalTranscript = capitalize(finalTranscript);
};

function readMessage(data) {
    console.log(data.val().sender)
    console.log(data.val().message)
}

database.on('child_added', readMessage);

/**
 * 음성 인식 에러 처리
 */
recognition.onerror = function (event) {
    console.log('onerror', event);

    if (event.error.match(/no-speech|audio-capture|not-allowed/)) {
        ignoreEndProcess = true;
    }

    $btnMic.className = 'off';
};

/**
 * 개행 처리
 * @param {string} s
 */
function linebreak(s) {
    return s.replace(TWO_LINE, '<p></p>').replace(ONE_LINE, '<br>');
}

/**
 * 첫문자를 대문자로 변환
 * @param {string} s
 */
function capitalize(s) {
    return s.replace(FIRST_CHAR, function (m) {
        return m.toUpperCase();
    });
}

/**
 * 음성 인식 트리거
 */
function start() {
    if (isRecognizing) {
        recognition.stop();
        return;
    }
    recognition.lang = language;
    recognition.start();
    console.log('start recognition');
    ignoreEndProcess = false;

    finalTranscript = '';
    final_span.innerHTML = '';
    interim_span.innerHTML = '';
}

/**
 * 문자를 음성으로 읽어 줍니다.
 * 지원: 크롬, 사파리, 오페라, 엣지
 */
function textToSpeech(text) {
    console.log('textToSpeech', arguments);
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

/**
 * 초기 바인딩
 */
function initialize() {
    btnOpenRoom.addEventListener('click', start);
    btnJoinRoom.addEventListener('click', start);
    btnOpenOrJoinRoom.addEventListener('click', start);
}

initialize();