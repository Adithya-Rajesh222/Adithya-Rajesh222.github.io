const boardElement = document.getElementById("board");

const pieces = [
  "♜","♞","♝","♛","♚","♝","♞","♜",
  "♟","♟","♟","♟","♟","♟","♟","♟",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "♙","♙","♙","♙","♙","♙","♙","♙",
  "♖","♘","♗","♕","♔","♗","♘","♖"
];

let selectedSquare = null;

function drawBoard() {
  boardElement.innerHTML = "";
  pieces.forEach((piece, i) => {
    const square = document.createElement("div");
    square.className = "square " + ((Math.floor(i / 8) + i) % 2 ? "black" : "white");
    square.textContent = piece;
    square.onclick = () => selectSquare(i, square);
    boardElement.appendChild(square);
  });
}

function selectSquare(index, square) {
  if (selectedSquare === null && pieces[index] !== "") {
    selectedSquare = index;
    square.classList.add("selected");
  } else if (selectedSquare !== null) {
    pieces[index] = pieces[selectedSquare];
    pieces[selectedSquare] = "";
    selectedSquare = null;
    drawBoard();
  }
}

drawBoard();
