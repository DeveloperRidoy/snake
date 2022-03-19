import { toggleBtn, } from "../../config.js";
import movementInput from "./movementInput.js";
import settingsInput from "./settingsInput.js";
export default function userInput(game) {
    movementInput(game);
    settingsInput(game);
    toggleBtn.addEventListener("click", function () {
        game.gameOver = !game.gameOver;
    });
}
//# sourceMappingURL=userInput.js.map