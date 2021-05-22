import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAdZrz9Nom8rRwkxgMLx7_DP-huFiI3HPE",
    authDomain: "rtc-project-82fd0.firebaseapp.com",
    databaseURL: "https://rtc-project-82fd0-default-rtdb.firebaseio.com",
    projectId: "rtc-project-82fd0",
    storageBucket: "rtc-project-82fd0.appspot.com",
    messagingSenderId: "289053377480",
    appId: "1:289053377480:web:b7ced6b083581973ecb6fd",
    measurementId: "G-RJLHKWEVRY"
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();
const gyubinFirebaseDatabaseRef = firebase.database().ref();

// 필요한 곳에서 사용할 수 있도록 내보내기
// export default firebase;
export { gyubinFirebaseDatabaseRef };
