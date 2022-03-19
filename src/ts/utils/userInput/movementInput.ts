import Game from "../../Game.js";

export default function movementInput(game: Game) {
  // handle keyboard input
  document.addEventListener("keydown", (e) => handleKeyBoardInput(e, game));

}


function handleKeyBoardInput(e: KeyboardEvent, game: Game) {
  switch (e.key) {
    case "ArrowUp":
      if (game.direction.y === 1) return;
      game.direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (game.direction.y === -1) return;
      game.direction = { x: 0, y: 1 };
      break;
    case "ArrowRight":
      if (game.direction.x === -1) return;
      game.direction = { x: 1, y: 0 };
      break;
    case "ArrowLeft":
      if (game.direction.x === 1) return;
      game.direction = { x: -1, y: 0 };
      break;
  }
}

