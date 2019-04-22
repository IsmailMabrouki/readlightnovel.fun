//variables
var cb = document.getElementById("contents-box");

var btn = document.getElementById("contents-box-button");

var span = document.getElementsByClassName("close")[0];

//functions
//click the button to show the box
btn.onclick = function () {
    cb.style.display = "block";
}

//click x to close the box
span.onclick = function () {
    cb.style.display = "none";
}