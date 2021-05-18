import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCyNrJ0JYptlpHSm8iiE51t2p-IBXSCmeQ",
//   authDomain: "emotional-minutes-7445b.firebaseapp.com",
//   projectId: "emotional-minutes-7445b",
//   storageBucket: "emotional-minutes-7445b.appspot.com",
//   messagingSenderId: "188732266944",
//   appId: "1:188732266944:web:ee9758c2cbba7019519025",
//   measurementId: "G-4RKWPW0CWK",
//   databaseURL: "https://emotional-minutes-7445b-default-rtdb.firebaseio.com",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCAPq36ZvGSEcdGX9OXEmrMlh_Fd2h_1CA",
  authDomain: "emotional-minutes.firebaseapp.com",
  databaseURL: "https://emotional-minutes-default-rtdb.firebaseio.com",
  projectId: "emotional-minutes",
  storageBucket: "emotional-minutes.appspot.com",
  messagingSenderId: "16714778368",
  appId: "1:16714778368:web:f4d9f21b223a7b9878d5e5",
  measurementId: "G-H3H5BEWXPY",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();
const firebaseDatabaseRef = firebase.database().ref();
const firebaseStorage = firebase.storage();

// 필요한 곳에서 사용할 수 있도록 내보내기
// export default firebase;
export { firebaseDatabaseRef, firebaseStorage };
