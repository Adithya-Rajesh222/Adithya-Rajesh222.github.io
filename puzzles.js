const boardElement = document.getElementById("board");
const message = document.getElementById("message");

/* MATE IN 1 PUZZLE */
const pieces = [
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","♚","","",
  "","","","","","♕","",""
];

let selected = null;
const correctFrom = 61; // White Queen
const correctTo = 53;   // Checkmate square

function drawBoard() {
  boardElement.innerHTML = "";

  pieces.forEach((piece, i) => {
    const square = document.createElement("div");
    const dark = (Math.floor(i / 8) + i) % 2;

    square.className = "square " + (dark ? "black" : "white");
    square.textContent = piece;

    if ("♙♖♘♗♕♔".includes(piece)) square.classList.add("white-piece");
    if ("♟♜♞♝♛♚".includes(piece)) square.classList.add("black-piece");

    square.onclick = () => clickSquare(i);
    boardElement.appendChild(square);
  });
}

function clickSquare(i) {
  if (selected === null && pieces[i] !== "") {
    selected = i;
  } else if (selected !== null) {
    if (selected === correctFrom && i === correctTo) {
      pieces[i] = pieces[selected];
      pieces[selected] = "";
      message.textContent = "✅ Correct! Checkmate!";
    } else {
      message.textContent = "❌ Wrong move. Try again.";
    }
    selected = null;
    drawBoard();
  }
}

drawBoard();
