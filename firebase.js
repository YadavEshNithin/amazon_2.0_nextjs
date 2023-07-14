import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBl8k6eaK8xgHqw95ubOS_BxqMdZzjjzlE",
    authDomain: "amzn-2-clone-9f6fe.firebaseapp.com",
    projectId: "amzn-2-clone-9f6fe",
    storageBucket: "amzn-2-clone-9f6fe.appspot.com",
    messagingSenderId: "295397732118",
    appId: "1:295397732118:web:199c20d781e6bc1dd62a37"
  };

  
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :
firebase.app();

console.log("app of firebase")

const db = app.firestore()

export default db;