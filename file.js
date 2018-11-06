function helloConsole() {
  console.log("Hello, World!");
}

function helloPopUp() {
  alert("Hello, World!");
}

function helloBrowser() {
  var p = document.getElementById("hellobrowser");
  p.innerHTML = "Hello, World!";
}

function helloStranger() {
  var user = prompt("What's your name?");
  var greeting = document.getElementById("hellostranger");
  greeting.innerHTML = "Hello, " + user + "!"; 
}
