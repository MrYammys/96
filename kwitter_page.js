username = localStorage.getItem("username");
roomname = localStorage.getItem("room");

var firebaseConfig = {
    apiKey: "AIzaSyDrE6p7DbyUcnkZAjMiuyqvG5a2vVXPIno",
    authDomain: "kwitter-99d66.firebaseapp.com",
    databaseURL: "https://kwitter-99d66-default-rtdb.firebaseio.com",
    projectId: "kwitter-99d66",
    storageBucket: "kwitter-99d66.appspot.com",
    messagingSenderId: "677902696832",
    appId: "1:677902696832:web:a649bec1588e42e866c165"
};

firebase.initializeApp(firebaseConfig);

function Send()
{
      firebase.database().ref(roomname).push({
            name : username, 
            message: message,
            like : 0
      });
}