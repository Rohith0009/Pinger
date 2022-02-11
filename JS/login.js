function login() {
  full_name = document.getElementById("full_name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  localStorage.setItem("full_name", full_name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  document.getElementById("full_name").innerHTML = "";
  document.getElementById("email").innerHTML = "";
  document.getElementById("password").innerHTML = "";
  window.location = "room.html";
}

function register() {
  full_name = document.getElementById("full_name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  localStorage.setItem("full_name", full_name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  document.getElementById("full_name").innerHTML = "";
  document.getElementById("email").innerHTML = "";
  document.getElementById("password").innerHTML = "";
  window.location = "room.html";
}
