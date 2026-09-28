/* =========================================================
    SELECT ELEMENTS
========================================================= */

let themeText = document.getElementsByClassName("theme")[0];
let mainHeading = document.getElementsByClassName("main-heading")[0];
let ramHeading = document.getElementsByClassName("ram-heading")[0];

/* =========================================================
    COMMON ANIMATION FUNCTION
========================================================= */

function applyAnimation(animationName) {
  themeText.style.animation = "none";
  /*
     offsetHeight forces the browser
     to restart the animation.
  */
  themeText.offsetHeight;
  themeText.style.animation = animationName + " 1s ease-in-out";
}

/* =========================================================
    THEME 1
========================================================= */

function color1() {
  document.body.style.backgroundColor = "orange";
  themeText.style.color = "black";
  mainHeading.style.color = "black";
  ramHeading.style.color = "black";
  applyAnimation("animation1");
}

/* =========================================================
    THEME 2
========================================================= */

function color2() {
  document.body.style.backgroundColor = "red";
  themeText.style.color = "yellow";
  mainHeading.style.color = "white";
  ramHeading.style.color = "white";
  applyAnimation("animation2");
}

/* =========================================================
    THEME 3
========================================================= */

function color3() {
  document.body.style.backgroundColor = "pink";
  themeText.style.color = "blue";
  mainHeading.style.color = "blue";
  ramHeading.style.color = "blue";
  applyAnimation("animation3");
}

/* =========================================================
    THEME 4
========================================================= */

function color4() {
  document.body.style.backgroundColor = "black";
  themeText.style.color = "white";
  mainHeading.style.color = "orange";
  ramHeading.style.color = "orange";
  applyAnimation("animation4");
}

/* =========================================================
    THEME 5
========================================================= */

function color5() {
  document.body.style.backgroundColor = "purple";
  themeText.style.color = "white";
  mainHeading.style.color = "yellow";
  ramHeading.style.color = "white";
  applyAnimation("animation5");
}

/* =========================================================
    THEME 6
========================================================= */

function color6() {
  document.body.style.backgroundColor = "brown";
  themeText.style.color = "orange";
  mainHeading.style.color = "white";
  ramHeading.style.color = "orange";
  applyAnimation("animation6");
}

/* =========================================================
    COUNTER
========================================================= */

let count = 0;

/* =========================================================
    INCREMENT
========================================================= */

function increment() {
  count++;
  document.getElementById("count").innerHTML = count;
}

/* =========================================================
    DECREMENT
========================================================= */

function decrement() {
  count--;
  document.getElementById("count").innerHTML = count;
}

/* =========================================================
    RESET
========================================================= */

function reset() {
  count = 0;
  document.getElementById("count").innerHTML = count;
}