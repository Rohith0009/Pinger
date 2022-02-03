function startup(){
    room_name = localStorage.getItem("room_name");
    document.getElementById("room_name_display").innerHTML = "Welcome To, #" + room_name;
}

function back(){
    window.location = "room.html"
}