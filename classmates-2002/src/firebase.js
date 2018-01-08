import firebase from 'firebase'

var config = {
   apiKey: "AIzaSyCrN4TXtIbUH2wyGO52IqMmIjfM5xdB7Dw",
   authDomain: "classmates-deca7.firebaseapp.com",
   databaseURL: "https://classmates-deca7.firebaseio.com",
   projectId: "classmates-deca7",
   storageBucket: "",
   messagingSenderId: "210941239171"
 };
 firebase.initializeApp(config);

 export default firebase;
