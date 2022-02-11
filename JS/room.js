function notices() {
  window.location = "/HTML/notices.html";
}

function logout() {
  localStorage.removeItem("full_name");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("room_name");
  window.location = "/index.html";
}

function startup() {
  full_name = localStorage.getItem("full_name");
  email = localStorage.getItem("email");
  password = localStorage.getItem("password");
  document.getElementById("name_display1").innerHTML = "Hello, " + full_name + "<sup><img src='/Images/Verified_logo.png' /></sup>";
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

function join() {
  console.log("Joining");
  room_name = document.getElementById("room_name_input").value;
  firebase.database().ref("/").child(room_name).update({
    Pinger: "First Message",
  });
  localStorage.setItem("room_name", room_name);
  window.location = "/HTML/chat.html";
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
        row = "<div class='room_name' id=" + id_Room_names + " onclick='redirect(this.id)'> #" + Room_names + " </div><hr id='hr1'>";
        document.getElementById("room_list").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirect(name) {
  name = name.replace("_", " ");
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "/HTML/chat.html";
}
