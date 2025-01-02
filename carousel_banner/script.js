let move = 0;
document.querySelector(".left-arrow").addEventListener("click", function () {
  if ((move = -200)) {
    move = -100;
  } else if ((move = -100)) {
    move = 0;
  } else if ((move = 0)) {
    move = 0;
  }
  document.querySelector(".image").style.transform = `translate(${move}vw)`;
});
document.querySelector(".right-arrow").addEventListener("click", function () {
  if ((move = -100)) {
    move = -200;
  } else if ((move = 0)) {
    move = -100;
  }
  document.querySelector(".image").style.transform = `translate(${move}vw)`;
});

document.querySelector(".dot1").addEventListener("click", function () {
  if ((move = -200)) {
    move = 0;
  }
  if ((move = -100)) {
    move = 0;
  }
  document.querySelector(".image").style.transform = `translate(${move}vw)`;
});

document.querySelector(".dot2").addEventListener("click", function () {
  if ((move = 0)) {
    move = -100;
  }
  if ((move = -200)) {
    move = -100;
  }
  document.querySelector(".image").style.transform = `translate(${move}vw)`;
});

document.querySelector(".dot3").addEventListener("click", function () {
  if ((move = 0)) {
    move = -200;
  }
  if ((move = -100)) {
    move = -200;
  }
  document.querySelector(".image").style.transform = `translate(${move}vw)`;
});
