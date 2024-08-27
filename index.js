const gridEle = document.querySelector(".grid");
const buttonEle = document.querySelector("button");

let size = 16;

buttonEle.addEventListener("click", function () {
  do {
    size = prompt("Please enter grid size (max 100)");
  } while (!size || size <= 0 || size > 100);

  drawGrid();
});

function generateRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function drawGrid() {
  gridEle.textContent = "";

  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridEle.appendChild(gridRow);
    for (let j = 0; j < size; j++) {
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridRow.appendChild(gridBox);
    }
  }

  const gridElements = document.querySelectorAll(".grid-box");
  const gridSize = 960;
  const eleSize = gridSize / size;

  gridElements.forEach((ele) => {
    ele.style.height = `${eleSize}px`;
  });

  gridEle.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("grid-box")) {
      e.target.style.backgroundColor = generateRandomColor();
    }
  });
}

drawGrid();
