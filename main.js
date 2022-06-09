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

function add_user(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    console.log("user name" + user_name);
    window.location = "chattery_room.html";
}