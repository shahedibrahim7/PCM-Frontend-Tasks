const game = document.querySelector("#game");
const movesSpan = document.querySelector("#moves");
const bestSpan = document.querySelector("#best");

let moves = 0;
let flippedCards = [];
let matchedCount = 0;

const symbols = ["A", "B", "C", "D", "A", "B", "C", "D"]; // 4 pairs
shuffle(symbols);

symbols.forEach(symbol => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.symbol = symbol;
  card.textContent = "";
  card.addEventListener("click", () => flipCard(card));
  game.append(card);
});

function flipCard(card) {
  if (card.classList.contains("flipped")) return;
  if (flippedCards.length === 2) return;

  card.classList.add("flipped");
  card.textContent = card.dataset.symbol;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    moves++;
    movesSpan.textContent = moves;
    checkMatch();
  }
}

function checkMatch() {
  const [c1, c2] = flippedCards;

  if (c1.dataset.symbol === c2.dataset.symbol) {
    matchedCount += 2;
    flippedCards = [];

    if (matchedCount === symbols.length) {
      saveBestScore();
      alert("You win!");
    }
  } else {
    setTimeout(() => {
      c1.classList.remove("flipped");
      c2.classList.remove("flipped");
      c1.textContent = "";
      c2.textContent = "";
      flippedCards = [];
    }, 800);
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function saveBestScore() {
  const best = localStorage.getItem("bestScore");

  if (!best || moves < best) {
    localStorage.setItem("bestScore", moves);
  }

  bestSpan.textContent = localStorage.getItem("bestScore");
}

// load best score on start
bestSpan.textContent = localStorage.getItem("bestScore") || "-";
