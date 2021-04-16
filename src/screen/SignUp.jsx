import React, { useState } from 'react';
import '../assets/styles/style.css'
import firebase from 'firebase';
import "firebase/auth";

import Button from '../components/component/LogBotton';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ChangeEmail = (e) => {
    setEmail(e.tatget.value);
  };


  function handlePress() {
    // 会員登録の実装
    // emailとpasswordを渡し、成功したら(then) 関数を実行
    //  失敗した場合(catch)の処理が走る
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        /* Alert.alert(error.code); */
      });
  }

  return (
    <div className="LogContainer">
      <div className="LogInner">

        <h1 className="LogTitle">Sign up</h1>
        <form>
        <input
          className="LogInput"
          type="email"
          value={email}
          onChange={ChangeEmail}
          // 先頭が大文字にならないように設定
          autocapitalize="off"
          // 何を入力するべきかを表示
          placeholder="email-address"
        />
        <input
          className="LogInput"
            type="password"
            value={password}
          // onChange={ChangePassword}
          // 先頭が大文字にならないように設定
          autocapitalize="off"
          // 何を入力するべきかを表示
          placeholder="Password"
        />

        <Button
          label="Submit"
          onPress={handlePress}
        />
       </form>
        <div>
          <p className="LogFotterText">Already registerd?</p>
          <button onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Sign Up' }],
            });
          }}
          >
            <p className="LogFutterLink">Log In.</p>
          </button>
        </div>

      </div>
    </div>
  );
}
