import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFeC-Ee1ih4arcRCRIjjqDwV_3Umc1ZVk',
  authDomain: 'my-fullstack-blog.firebaseapp.com',
  projectId: 'my-fullstack-blog',
  storageBucket: 'my-fullstack-blog.appspot.com',
  messagingSenderId: '27654937379',
  appId: '1:27654937379:web:bf3569ab93b6f611f64a96',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
