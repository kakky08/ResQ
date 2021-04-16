import React, {useState, useCallback, useEffect} from 'react';
import './assets/styles/style.css'
import {db} from './firebase/index'
import ChatBotScreen from './screen/ChatBotScreen'
// import HomeScreen from './screen/HomeScreen'
// import {FormDialog} from "./components/Forms/index";
// import LogInScreen from './screen/LogInScreen';
import SignUp from './screen/SignUp';
// import LogRoot from "./components/component/LogRoot";

const App = () => {
  return (
    <SignUp />
     /*    <HomeScreen /> */
       /*  <ChatBotScreen /> */
    )
}

export default App;
