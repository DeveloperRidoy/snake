import Game from "../../Game.js";
import calcSwipeDirection from "../calcSwipeDirection.js";
import { Movement } from "../types.js";

export default function movementInput(game: Game) {
  // handle keyboard input
  document.addEventListener("keydown", (e) => handleKeyBoardInput(e, game));

  // handle swipe input 
  handleSwipeInput(game)
}


function handleSwipeInput(game: Game) {
  let touchStartX: number; 
  let touchStartY: number;
  let touchEndX: number; 
  let touchEndY: number;

  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].pageX;
    touchStartY = e.changedTouches[0].pageY;
  })

  document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].pageX;
    touchEndY = e.changedTouches[0].pageY;

    const movement = calcSwipeDirection({ touchStartX, touchStartY, touchEndX, touchEndY });
    handleMovement(movement, game);
  })
}

function handleKeyBoardInput(e: KeyboardEvent, game: Game) {
  const movement =
    e.key === "ArrowUp"
      ? Movement.UP
      : e.key === "ArrowDown"
      ? Movement.DOWN
      : e.key === "ArrowLeft"
      ? Movement.LEFT
      : e.key === "ArrowRight"
      ? Movement.RIGHT
      : null;

  if (movement !== null) handleMovement(movement, game);
}

function handleMovement(movement: Movement, game: Game) {
  switch (movement) {
    case Movement.UP:
      if (game.direction.y === 1) return;
      game.direction = { x: 0, y: -1 };
      break;
    case Movement.DOWN:
      if (game.direction.y === -1) return;
      game.direction = { x: 0, y: 1 };
      break;
    case Movement.RIGHT:
      if (game.direction.x === -1) return;
      game.direction = { x: 1, y: 0 };
      break;
    case Movement.LEFT:
      if (game.direction.x === 1) return;
      game.direction = { x: -1, y: 0 };
      break;
  }
}
