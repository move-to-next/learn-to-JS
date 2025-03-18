let box = document.querySelector(".box");
let position = 0;

function moving(){
    position += 10;
    box.style.left = position + "px";
}

setInterval(moving, 100)