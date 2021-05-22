import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig2 = {
  apiKey: "AIzaSyCyNrJ0JYptlpHSm8iiE51t2p-IBXSCmeQ",
  authDomain: "emotional-minutes-7445b.firebaseapp.com",
  projectId: "emotional-minutes-7445b",
  storageBucket: "emotional-minutes-7445b.appspot.com",
  messagingSenderId: "188732266944",
  appId: "1:188732266944:web:ee9758c2cbba7019519025",
  measurementId: "G-4RKWPW0CWK",
  databaseURL: "https://emotional-minutes-7445b-default-rtdb.firebaseio.com",
};

const firebaseConfig1 = {
  apiKey: "AIzaSyCAPq36ZvGSEcdGX9OXEmrMlh_Fd2h_1CA",
  authDomain: "emotional-minutes.firebaseapp.com",
  databaseURL: "https://emotional-minutes-default-rtdb.firebaseio.com",
  projectId: "emotional-minutes",
  storageBucket: "emotional-minutes.appspot.com",
  messagingSenderId: "16714778368",
  appId: "1:16714778368:web:f4d9f21b223a7b9878d5e5",
  measurementId: "G-H3H5BEWXPY",
};

// const firebaseConfig2 = {
//   apiKey: "AIzaSyAdZrz9Nom8rRwkxgMLx7_DP-huFiI3HPE",
//   authDomain: "rtc-project-82fd0.firebaseapp.com",
//   databaseURL: "https://rtc-project-82fd0-default-rtdb.firebaseio.com",
//   projectId: "rtc-project-82fd0",
//   storageBucket: "rtc-project-82fd0.appspot.com",
//   messagingSenderId: "289053377480",
//   appId: "1:289053377480:web:b7ced6b083581973ecb6fd",
//   measurementId: "G-RJLHKWEVRY"
// }

// firebaseConfig 정보로 firebase 시작
const app1 = firebase.initializeApp(firebaseConfig1);
const app2 = firebase.initializeApp(firebaseConfig2, 'app2');

// firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();
const firebaseDatabaseRef = firebase.database(app1).ref();
const firebaseStorage = firebase.storage();

const gyubin = firebase.database(app2).ref();

// 필요한 곳에서 사용할 수 있도록 내보내기
// export default firebase;
export { firebaseDatabaseRef, firebaseStorage, gyubin };
