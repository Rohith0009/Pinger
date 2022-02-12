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

function startup() {
  full_name = localStorage.getItem("full_name");
  email = localStorage.getItem("email");
  password = localStorage.getItem("password");
  document.getElementById("name_display1").innerHTML = "Hello, " + full_name + "<sup><img src='Images/Verified_logo.png' /></sup> <br> Welcome To, Notices! ";
}

function contact() {
  window.location = "contact.html";
}