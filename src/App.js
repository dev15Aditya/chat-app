import React from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';

firebase.initializeApp({
  apiKey: 'AIzaSyBzCAAKFUBxe0RHaRI6PAze4A0d3X7GMvo',
  authDomain: 'chat-app-7f302.firebaseapp.com',
  projectId: 'chat-app-7f302',
  storageBucket: 'chat-app-7f302.appspot.com',
  messagingSenderId: '368328327511',
  appId: '1:368328327511:web:796b4004ae465c97a9fe12',
  measurementId: 'G-FT3QSBS9ZT',
});

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Chat Room</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
