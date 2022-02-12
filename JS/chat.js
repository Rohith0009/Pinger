function startup() {
  room_name = localStorage.getItem("room_name");
  document.getElementById("room_name_display").innerHTML = "Welcome To, #" + room_name;
}

function logout() {
  localStorage.removeItem("full_name");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function back() {
  window.location = "room.html";
}

function contact() {
  window.location = "contact.html";
}

var firebaseConfig = {
  apiKey: "AIzaSyAj5LQ3TvmfykEQktNRf3ga2QcNi5T89LA",
  authDomain: "pinger-82f60.firebaseapp.com",
  databaseURL: "https://pinger-82f60-default-rtdb.firebaseio.com",
  projectId: "pinger-82f60",
  storageBucket: "pinger-82f60.appspot.com",
  messagingSenderId: "78376631694",
  appId: "1:78376631694:web:f8dc8170257c31979438df",
};

firebase.initializeApp(firebaseConfig);

//Main code

room_name = localStorage.getItem("room_name");
full_name = localStorage.getItem("full_name");

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    Name: full_name,
    Message: msg,
    Like: 0,
  });
  document.getElementById("msg").value = "";
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("room_list").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        id_Room_names = Room_names.replace(" ", "_");
        //Start code

        //End code
      });
    });
}
getData();
