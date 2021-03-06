import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuUY4lae4QBnDK2oOb_DOpEuHRueXKBuc",
    authDomain: "todo-app-react-17473.firebaseapp.com",
    projectId: "todo-app-react-17473",
    storageBucket: "todo-app-react-17473.appspot.com",
    messagingSenderId: "83865566098",
    appId: "1:83865566098:web:bb35843d82dd48c3b41f4b",
    measurementId: "G-BP02ZPC192"
})

const db = firebase.firestore();

export default db;