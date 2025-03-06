const gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "flex-container");

const resetBtn = document.getElementById("reset-btn");
const newGrid = document.getElementById("change-grid");
var opacityValue = 0;

changeGrid();


gridContainer.addEventListener("mouseover", (e) => {
  
  e.target.classList.add("painted");
  paintCell(e.target);
});

resetBtn.addEventListener("click", () => {
  reset();
});

newGrid.addEventListener("click", () => {
  changeGrid(getNewSize());
})

function paintCell(cell){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  cell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacityValue/10})`;
  if (opacityValue < 10 ) {
    opacityValue += 1;
  };
  
}

function getNewSize() {
  let entry = 0;
  do {
    entry = prompt("Enter new grid size, between 1 and 100;")
    console.log(entry);
  } while (entry < 1 || entry > 100);
  return entry;
}

function changeGrid(newSize = 16) {
  gridContainer.innerHTML = "";
  for ( let i = 0; i < newSize; i++){
    let row = createRowContainer();
    for (let i = 0; i < newSize; i++){
      row.appendChild(createElementDiv());
    }
    gridContainer.appendChild(row);
  };
  document.body.appendChild(gridContainer);
};

function createRowContainer() {
  const rowContainer = document.createElement("div");
  rowContainer.setAttribute("class", "flex-row");
  return rowContainer;
};

function createElementDiv() {
  const elementDiv = document.createElement("div");
  elementDiv.setAttribute("class", "flex-item");
  return elementDiv;
};

function reset() {
  const elementArr = Array.from(document.getElementsByClassName("painted"));
  for ( let i = 0; i < elementArr.length; i++) {
    elementArr[i].classList.remove("painted");
    elementArr[i].style.backgroundColor = "initial";
    opacityValue = 0;
  }
}