let i = 0;
const txt = "👋 Hello, I'm Raul Castillo\nA software developer that enjoys building web/mobile applications.";
const speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    if (txt.charAt(i) === "\n") {
        document.getElementById("Intro").innerHTML += "<br>";
      } else {
        document.getElementById("Intro").innerHTML += txt.charAt(i);
      }
      
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;