/*!
 *
 * WebRTC Lab
 * @author dodortus (codejs.co.kr / dodortus@gmail.com)
 *
 */
$(function () {
    if (typeof webkitSpeechRecognition !== 'function') {
        alert('크롬에서만 동작 합니다.');
        return false;
    }

    const FIRST_CHAR = /\S/;
    const TWO_LINE = /\n\n/g;
    const ONE_LINE = /\n/g;

    const recognition = new webkitSpeechRecognition();
    const language = 'ko-KR';
    const $btnMic = document.querySelector('#btn-mic');

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
            } else {
                interimTranscript += transcript;
            }
        }

        finalTranscript = capitalize(finalTranscript);
        final_span.innerHTML = linebreak(finalTranscript);
        interim_span.innerHTML = linebreak(interimTranscript);

        console.log('finalTranscript', finalTranscript);
        console.log('interimTranscript', interimTranscript);
        fireCommand(interimTranscript);
    };

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
        $btnMic.addEventListener('click', start);
    }

    initialize();
});
