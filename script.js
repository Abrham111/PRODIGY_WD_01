const text = "In my opinion Magnus Carlsen is the GOAT"; // The text to display
const speed = 100; // The speed (in milliseconds) at which each letter appears

const typewriter = document.getElementById("goat");
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}

type();
