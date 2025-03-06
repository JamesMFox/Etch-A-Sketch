const gridContainer = document.createElement("div");
gridContainer.setAttribute("class", "flex-container");


for ( let i = 0; i < 16; i++){
  let row = createRowContainer();
  for (let i = 0; i < 16; i++){
    row.appendChild(createElementDiv());
  }
  gridContainer.appendChild(row);
}

document.body.appendChild(gridContainer);

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