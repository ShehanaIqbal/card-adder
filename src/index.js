import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app"


var config = {
    apiKey: "AIzaSyBXexPnOpKUubJBXua3rh1aqIaw9wIchvc",
    authDomain: "card-adder.firebaseapp.com",
    databaseURL: "https://card-adder.firebaseio.com",
    projectId: "card-adder",
    storageBucket: "card-adder.appspot.com",
    messagingSenderId: "792176172502",
    appId: "1:792176172502:web:f769a0d80975bbe3401877",
    measurementId: "G-359LVX8E6M"
}
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
