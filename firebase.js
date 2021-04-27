
import * as firebase from 'firebase';
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAwftyLyxh8DQpcKMob1uGUqD-vVLnISpI",
    authDomain: "signal-clone-yt-build-8791d.firebaseapp.com",
    projectId: "signal-clone-yt-build-8791d",
    storageBucket: "signal-clone-yt-build-8791d.appspot.com",
    messagingSenderId: "1058222344754",
    appId: "1:1058222344754:web:30fa470d3ecbc6f15d8a2b"
  };


  let app;

  // firebase.initializeApp(firebaseConfig);
  if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  }else {
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  //  const db = firestore();
  // const auth = auth();
  export { db, auth };