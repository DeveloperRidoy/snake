import {
  gameBoard,
  GRID_SIZE,
  highScoreElement,
  scoreElement,
  toggleBtn,
} from "../config.js";
import { Direction, Position, Snake } from "./types.js";

export function updateSnakeUI(snake: Snake) {
  snake.forEach((position) => {
    generateElement(position.x, position.y, "snake");
  });
}

export function updateFoodUI(position: Position) {
  generateElement(position.x, position.y, "food");
}

function generateElement(x: number, y: number, className: string) {
  const bodyElement = document.createElement("div");
  bodyElement.classList.add(className);
  bodyElement.style.gridRowStart = String(y);
  bodyElement.style.gridColumnStart = String(x);
  gameBoard.append(bodyElement);
}

export function isOutsideGrid(snake: Snake) {
  return snake.some(
    (part) =>
      part.x < 1 || part.y < 1 || part.x > GRID_SIZE || part.y > GRID_SIZE
  );
}

export function snakeIntersect(snake: Snake) {
  if (snake.length === 1) return false;
  const headIndex = snake.length - 1;
  const snakeHead = snake[headIndex];
  return snake.some(
    (part, i) =>
      i < headIndex && part.x === snakeHead.x && part.y === snakeHead.y
  );
}

export function updateScoreUI(score: number, highScore: number) {
  scoreElement.innerText = String(score);
  highScoreElement.innerText = String(highScore);
}

export const randomPosition = (): Position => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
};

export const snakeOnPosition = (snake: Snake, position: Position) => {
  return snake.some((part) => part.x === position.x && part.y === position.y);
};

export const randomEmptyPosition = (snake: Snake): Position => {
  let position: Position = null;
  while (position === null || snakeOnPosition(snake, position)) {
    position = randomPosition();
  }
  return position;
};

export const updateButtonUI = (gameOver: boolean) => {
  toggleBtn.innerText = gameOver ? "start" : "stop";

};

export function randomDirection(): Direction {
  const dir1 = { x: 1, y: 0 };
  const dir2 = { x: -1, y: 0 };
  const dir3 = { x: 0, y: -1 };
  const dir4 = { x: 0, y: 1 };

  const toss = Math.floor(Math.random() * 4) + 1;
  const randDirection =
    toss === 1
      ? dir1
      : toss === 2
      ? dir2
      : toss === 3
      ? dir3
      : toss === 4 && dir4;

  return randDirection as Direction;
}
