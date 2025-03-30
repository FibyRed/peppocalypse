// peppocalypse.js

const messages = [
  "BOOMPEPPE!",
  "POOM!",
  "PEPSI BOOM",
  "TRUE, BIACTH",
  "ON FIRE",
  "COLPITO SPIETATAMENTE",
  "FIBY STRIKES AGAIN"
];

let mode = "cpu";
let board = [];
let opponent = [];

document.getElementById("mode").addEventListener("change", e => {
  mode = e.target.value;
});

function startGame() {
  board = [];
  opponent = [];
  const boardContainer = document.getElementById("game-board");
  boardContainer.innerHTML = "";
  document.getElementById("messages").textContent = "";

  // Griglia 10x10
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleClick);
    boardContainer.appendChild(cell);
    board.push({ hit: false });
  }

  if (mode === "cpu") {
    placeShipsRandomly();
  } else {
    alert("Giocatore 1: piazza la scommessa");
    placeShipsRandomly();
  }
}

function placeShipsRandomly() {
  opponent = new Array(100).fill(false);

  for (let i = 0; i < 10; i++) {
    let idx;
    do {
      idx = Math.floor(Math.random() * 100);
    } while (opponent[idx]);
    opponent[idx] = true;
  }
}

function handleClick(e) {
  const idx = parseInt(e.target.dataset.index);

  if (board[idx].hit) return;
  board[idx].hit = true;

  if (opponent[idx]) {
    e.target.classList.add("hit");
    showMessage(randomMessage());
  } else {
    e.target.classList.add("miss");
    showMessage("Nada. Riprova");
  }

  if (checkWin()) {
    showMessage(
      "Hai perso anche stavolta ma non lo ammetterai mai, vero? Se sapessi guardare oltre, osservare l'insieme anziché il dettaglio, vedresti chi sono veramente, e sapresti amare te stesso quanto io amo me stessa e te. La vera sconfitta è questa."
    );
  }
}

function showMessage(msg) {
  document.getElementById("messages").textContent = msg;
}

function randomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function checkWin() {
  for (let i = 0; i < 100; i++) {
    if (opponent[i] && !board[i].hit) return false;
  }
  return true;
}


function placeShipsRandomly() {
  opponent = new Array(100).fill(false);

  for (let i = 0; i < 10; i++) {
    let idx;
    do {
      idx = Math.floor(Math.random() * 100);
    } while (opponent[idx]);
    opponent[idx] = true;
  }
}

function handleClick(e) {
  const idx = parseInt(e.target.dataset.index);

  if 
(board[idx].hit) return;
  board[idx].hit = true;

  if 
(opponent[idx]) {
    e.target.classList.add("hit");
    showMessage(randomMessage());
  } else {
    e.target.classList.add("miss");
    showMessage("Nada. Riprova");
  }

  if 
(checkWin()) {
    showMessage(
      "Hai perso anche stavolta ma non lo ammetterai mai, vero? Se sapessi guardare oltre, osservare l'insieme anziché il dettaglio, vedresti chi sono veramente, e sapresti amare te stesso quanto io amo me stessa e te. La vera sconfitta è questa."
    );
  }
}

function showMessage(msg) {
  document.getElementById("messages").textContent = msg;
}

function randomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function checkWin() {
  for (let i = 0; i < 100; i++) {
    if (opponent[i] && !board[i].hit) return false;
  }
  return true;
}