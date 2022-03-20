import {
  backdrop,
  foodColorInput,
  settingsCloseBtn,
  settingsShowBtn,
  settingsUpdateBtn,
  snakeColorInput,
  snakeGrowthSpeedInput,
  snakeSpeedInput,
} from "../../config.js";
import Game from "../../Game.js";

export default function settingsInput(game: Game) {
  // show settings menu on click
  settingsShowBtn.addEventListener("click", () => {
    game.settings = { ...game.settings, showMenu: true };
  });

  // close settings munu on click
  settingsCloseBtn.addEventListener("click", () => {
    game.settings = { ...game.settings, showMenu: false };
  });

  // close settings munu on backdrop click
  backdrop.addEventListener("click", () => {
    game.settings = { ...game.settings, showMenu: false };
  });

  // close settings menu on clicking escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      game.settings = { ...game.settings, showMenu: false };
    }
  });

  // update settings on clicking update btn
  settingsUpdateBtn.addEventListener("click", () => updateSettings(game));
}

function updateSettings(game: Game) {
  // handle invalid settings 
  

  // update settings 
  game.settings = {
    ...game.settings,
    snakeSpeed: Number(snakeSpeedInput.value),
    snakeGrowthRate: Number(snakeGrowthSpeedInput.value),
    snakeColor: String(snakeColorInput.value),
    foodColor: String(foodColorInput.value),
    showMenu: false,
  };
}
