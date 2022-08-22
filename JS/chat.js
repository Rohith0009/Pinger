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
    .ref("/ + room_name")
    .on("value", function (snapshot) {
      document.getElementById("room_list").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
        //Start code
          console.log(firebase_message_id);
          console.log(message_data);

          name = message_data["Name"];
          message = message_data["Message"];
          like = message_data["Like"];

          name_with_tag = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>";
         
          row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("room_list").innerHTML += row;
        //End code
      });
    });
}
getData();
