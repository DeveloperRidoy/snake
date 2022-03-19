import {
  backdrop,
  foodColorInput,
  settingsCloseBtn,
  settingsShowBtn,
  settingsUpdateBtn,
  snakeColorInput,
  snakeGrowthSpeedInput,
  snakeSpeedInput,
  toggleBtn,
} from "../../config.js";
import Game from "../../Game.js";
import movementInput from "./movementInput.js";
import settingsInput from "./settingsInput.js";

export default function userInput(game: Game) {
    // snake movements 
    movementInput(game);

    // setting input 
    settingsInput(game);

    
  // game start or pause
  toggleBtn.addEventListener("click", () => {
    game.gameOver = !game.gameOver
  });

}

