import { gameBoard, SNAKE_SPEED } from "./config.js";
import Game from "./Game.js";
import { generateFood, generateSnake } from "./utils/functions.js";
import userInput from "./utils/userInput.js";

let prevTime = 0;

const game = new Game();

userInput(game);

window.requestAnimationFrame(updateGame);

function updateGame(currentTime: number) {
  if (game.gameOver) return;
  let secondsPassed = (currentTime - prevTime) / 1000;
  window.requestAnimationFrame(updateGame);
  if (secondsPassed < 1 / SNAKE_SPEED) return;
  prevTime = currentTime;
  gameBoard.innerHTML = "";
  game.update();
  if (game.gameOver) {
    if (confirm('Game over. Press ok to continue')) {
      window.location.href = '/'
      
    } else {
      return;
    }
  }
  generateSnake(game.snake);
  generateFood(game.food);
}
