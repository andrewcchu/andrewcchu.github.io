//let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];
// massdrop
//let colors = ["teal", "pink", "blue", "flesh"];
//let colors = ["#64B9B0", "#EC6F86", "#344652", "#EEA5A8"];

// Safyi real estate
//let colors = ["red", "d blue", "teal", "yellow"];
//let colors = ["#FF4756", "#161849", "#317585", "#FFB600"];

// camera lens
//let colors = ["blue", "yellow", "rosa", "gray"];
// let colors = ["#0099DC", "#FFA500", "#FF446B", "#4A4A4D"];

// custom
let colors = ["#8b0021", "#7f7772", "#d5802c", "#377c96", "#3e1e2b"];

(function() {
  // setModeEventListener();
  setRandomLinkColor();
  //setColorHoverListener();
  setparaEventListener();
  /*setRandomPhoto();*/

/*
  setInterval(() => {
    setRandomPhoto();
  }, 2500);

  setInterval(() => {
    setRandomLinkColor();
  }, 5000);
  */
})();

// /* Dark Mode */
// /* Not working currently, probably issues with hugo and splitting up html */
//
// function setModeEventListener() {
//   let list = document.body.getAttribute('class').split(' ');
//   document.getElementById("toggler").addEventListener("change", event => {
//     event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
//   });
// }

/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
  Array.from(document.getElementsByTagName("a")).forEach(e => {
    e.style.color = getRandomColor();
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll("a, button")).forEach(e => {
    e.addEventListener("mouseover", setRandomLinkColor);
  });
}

/* Photos */

// function setRandomPhoto() {
//   let num = Math.floor(Math.random() * 14) + 1;
//   document.getElementById(
//     "propic"
//   ).src = `https://cassidoo.co/img/face${num}.jpg`;
// }

/* para Toggles */

function setparaEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach(e => {
    e.addEventListener("click", paraToggle);
  });
}

function paraToggle(e) {
  let paraType = e.target;
  let color = getRandomColor();
  off(paraType);
  paraType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  let paraTypeElement = document.getElementsByClassName(paraType.id)[0];
  if (paraTypeElement !== undefined) paraTypeElement.classList.add("show");
}

function off(paraType) {
  Array.from(document.getElementsByTagName("button")).forEach(butt => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("para")).forEach(e => {
    e.classList.remove("show");
  });
}