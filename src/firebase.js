import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBbPMAC9HLnkGd2WFipHJozgs2ldaGIKOs",
  authDomain: "midterm-exam-db26c.firebaseapp.com",
  projectId: "midterm-exam-db26c",
  storageBucket: "midterm-exam-db26c.appspot.com",
  messagingSenderId: "925423639264",
  appId: "1:925423639264:web:f81d85360060d611f24e85"
})

export const auth = app.auth()
export default app
