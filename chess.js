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

function isWhitePiece(piece) {
  return piece.startsWith("🤍");
}

function drawBoard() {
  boardElement.innerHTML = "";

  pieces.forEach((piece, i) => {
    const square = document.createElement("div");
    const isDark = (Math.floor(i / 8) + i) % 2;

    square.className = "square " + (isDark ? "black" : "white");
    square.textContent = piece;

    if (piece && isWhitePiece(piece)) {
      square.classList.add("white-piece");
    } else if (piece) {
      square.classList.add("black-piece");
    }

    square.onclick = () => selectSquare(i);
    boardElement.appendChild(square);
  });
}

function selectSquare(index) {
  if (selectedSquare === null && pieces[index] !== "") {
    selectedSquare = index;
  } else if (selectedSquare !== null) {
    pieces[index] = pieces[selectedSquare];
    pieces[selectedSquare] = "";
    selectedSquare = null;
    drawBoard();
  }
}

drawBoard();
