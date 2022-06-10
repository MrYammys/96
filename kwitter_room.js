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

function logout() {
    window.location = "kwitter.html";
}
function Addroom() {
    room = document.getElementById("NewRoom").value;
    firebase.database().ref("/").child(room).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room", room);
    window.location("kwitter_page.html");
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class = 'room_name' id = " + Room_names+" onclick = 'redirectToRoomName(this.id) '>#" + Room_names + "</div></hr>"
//End code
});});}
getData();
function redirectToRoomName(row)
{
      localStorage.setItem("roomname", row);
      window.location = "kwitter_page.html";
}