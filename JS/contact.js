function logout() {
  localStorage.removeItem("full_name");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function notices() {
  window.location = "notices.html";
}

function back() {
  window.location = "room.html";
}