import { gameBoard, SNAKE_SPEED } from "./config.js";
import Game from "./Game.js";
import userInput from "./utils/userInput.js";
var prevTime = 0;
var game = new Game();
userInput(game);
window.requestAnimationFrame(updateGame);
function updateGame(currentTime) {
    var secondsPassed = (currentTime - prevTime) / 1000;
    window.requestAnimationFrame(updateGame);
    if (game.gameOver)
        return;
    if (secondsPassed < 1 / SNAKE_SPEED)
        return;
    prevTime = currentTime;
    gameBoard.innerHTML = "";
    game.updateLogic();
    if (game.gameOver) {
        alert("game over, your score is ".concat(game.score));
        game.reset();
    }
    game.updateUI();
}
//# sourceMappingURL=app.js.map