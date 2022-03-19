import { gameBoard, SNAKE_SPEED} from "./config.js";
import Game from "./Game.js";
import userInput from "./utils/userInput/userInput.js";

let prevTime = 0;

// new game instance 
const game = new Game();

// setup user input 
userInput(game);


// only update game when window is active
window.requestAnimationFrame(updateGame);

function updateGame(currentTime: number) {
  let secondsPassed = (currentTime - prevTime) / 1000;
  window.requestAnimationFrame(updateGame);
  
  // don't proceed if game over 
  if (game.gameOver) return;

  // don't proceed if time is not enough for one snake movement
  if (secondsPassed < 1 / game.settings.snakeSpeed) return;
  prevTime = currentTime;
  
  // clear game board 
  gameBoard.innerHTML = "";
  
  // update game logic
  game.updateLogic();
  
  // check for game over after updating game logic 
  if (game.gameOver) {
    alert(`game over, your score is ${game.score}`) 
    game.reset(); 
  }

  // update UI
  game.updateUI();
}
