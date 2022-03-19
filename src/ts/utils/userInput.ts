import { toggleBtn } from "../config.js";
import Game from "../Game.js";

export default function userInput(game: Game) {
    document.addEventListener('keydown', inputHandler)
    toggleBtn.addEventListener('click', () => {
        game.gameOver = game.gameOver ? false : true;
    })    
    function inputHandler(e: KeyboardEvent) {
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

}


