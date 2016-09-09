import firebase from 'firebase';
  // Initialize Firebase
  try{
    var config = {
      apiKey: "AIzaSyBtbJ5MbpMjdlLZeQboLxZbp0ktnUoQn5U",
      authDomain: "todo-ea10e.firebaseapp.com",
      databaseURL: "https://todo-ea10e.firebaseio.com",
      storageBucket: "todo-ea10e.appspot.com",
    };
    
    firebase.initializeApp(config);
  } catch (e){

  }

export var firebaseRef = firebase.database().ref();
export default firebase;
