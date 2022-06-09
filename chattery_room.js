var firebaseConfig = {
    apiKey: "AIzaSyDIm-PV4NQ2U1OINcs9u_ao2z001gkNkwY",
    authDomain: "lets-chat-6c45d.firebaseapp.com",
    databaseURL: "https://lets-chat-6c45d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-6c45d",
    storageBucket: "lets-chat-6c45d.appspot.com",
    messagingSenderId: "580510100953",
    appId: "1:580510100953:web:931b5a1bbdefd9152fbdc8"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function welcome(){
user_name = localStorage.getItem("user_name");
document.getElementById("welcome_message").innerHTML = "Welcome! " + user_name;
}

function add_room(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "add room name"
    });
    window.location = "chattery_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr style='width: 70%;'>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function logout(){
    window.location = "index.html";
}
