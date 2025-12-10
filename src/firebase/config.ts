import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDb2ai2YM6m342ptp3b74zKeghqy73sqq8",
  authDomain: "portfolio-ec570.firebaseapp.com",
  // authDomain: "https://portfolio-ec570.firebaseapp.com/__/auth/handler",
  projectId: "portfolio-ec570",
  storageBucket: "portfolio-ec570.appspot.com",
  messagingSenderId: "472510043627",
  appId: "1:472510043627:web:983e2936df5cd6a74ef5ae",
};

const app = initializeApp(firebaseConfig);

export default app;
