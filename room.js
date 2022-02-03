function logout() {
  window.location = "index.html";
}

function startup() {
  full_name = localStorage.getItem("full_name");
  email = localStorage.getItem("email");
  password = localStorage.getItem("password");
  document.getElementById("name_display1").innerHTML = "Hello, " + full_name + "<sup><img src='Verified_logo.png' /></sup>";
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

user_name = localStorage.getItem("user_name");

function join() {
  console.log("Joining");
  room_name = document.getElementById("room_name_input").value;
  firebase.database().ref("/").child(room_name).update({
    Pinger: "First Message",
  });
  localStorage.setItem("room_name", room_name);
  window.location = "chat.html";
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
        //Start code
        row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'> #" + Room_names + " </div><hr>";
        document.getElementById("room_list").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirect(name) {
  localStorage.setItem("room_name", name);
  window.location = "chat.html";
}
