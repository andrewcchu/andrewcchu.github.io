// custom
let colors = ["#de7c00", "#789d4a", "#275d38", "#007396", "#59315f", "#a44343a", "#800000", "#717EC3"]; // UChicago

(function() {
  setRandomLinkColor();
})();

/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
  let previousColor = null;
  let colorCount = 0;

  Array.from(document.getElementsByTagName("a")).forEach(e => {
    if (e.id == "title") {
      return;
    }
    let newColor = getRandomColor();

    // Ensure no more than two adjacent links have the same color
    while (newColor === previousColor && colorCount >= 2) {
      newColor = getRandomColor();
    }

    e.style.color = newColor;

    if (newColor === previousColor) {
      colorCount++;
    } else {
      previousColor = newColor;
      colorCount = 1;
    }
  });
}
