import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyDk4yzqqRiCXTfn6Z2c5O3_96J2Ay6Kz78",
    authDomain: "netflix-clone-6e280.firebaseapp.com",
    projectId: "netflix-clone-6e280",
    storageBucket: "netflix-clone-6e280.appspot.com",
    messagingSenderId: "536218764750",
    appId: "1:536218764750:web:dc645a1c1719f18cf0579f",
}

//firebase.initializeApp(config);

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

