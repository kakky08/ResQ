import React, { useState } from 'react';
import '../assets/styles/style.css'
import firebase from 'firebase';
import "firebase/auth";

import Button from '../components/component/LogBotton';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredentail) => {
        const { user } = userCredentail;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        console.log("失敗");
      });
  }

  return (
   <div className="LogContainer">
      <div className="LogInner">

        <h1 className="LogTitle">Log In</h1>
        <form>
        <input
          className="LogInput"
          type="email"
          onChangeText={(text) => { setEmail(text); }}
          // 先頭が大文字にならないように設定
          autocapitalize="off"
          // 何を入力するべきかを表示
          placeholder="email-address"
        />
        <input
          className="LogInput"
          type="password"
          onChangeText={(text) => { setPassword(text); }}
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
            <p className="LogFutterLink">Sign Up.</p>
          </button>
        </div>

      </div>
    </div>
  );
}

// const classNames = classNameSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F4F8',
//   },
//   inner: {
//     paddingHorizontal: 27,
//     paddingVertical: 24,
//   },
//   title: {
//     fontSize: 24,
//     lineHeight: 32,
//     fontWeight: 'bold',
//     marginBottom: 24,
//   },
//   input: {
//     fontSize: 16,
//     height: 48,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 8,
//     marginBottom: 16,
//   },
//   fotterText: {
//     fontSize: 14,
//     lineHeight: 24,
//     marginRight: 8,
//   },
//   fotterLink: {
//     fontSize: 14,
//     lineHeight: 24,
//     color: '#467fd3',
//   },
//   fotter: {
//     flexDirection: 'row',
//   },
// });
