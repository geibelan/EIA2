function begruessung() {

var input = prompt ("Insert your name here!");
    var node : HTMLElement = document.getElementById("content");
    
    node.innerHTML = "Hey, what's up ";
    node.innerHTML += input;
    node.innerHTML += "?";
     
    console.log("Hey, what's up " +input +  "?");
    
 }

  document.addEventListener('DOMContentLoaded', begruessung);