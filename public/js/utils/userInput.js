var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { backdrop, foodColorInput, settingsCloseBtn, settingsShowBtn, settingsUpdateBtn, snakeColorInput, snakeGrowthSpeedInput, snakeSpeedInput, toggleBtn, } from "../config.js";
export default function userInput(game) {
    movementInput(game);
    settingsInput(game);
    toggleBtn.addEventListener("click", function () {
        game.gameOver = game.gameOver ? false : true;
    });
}
function settingsInput(game) {
    settingsShowBtn.addEventListener("click", function () {
        game.settings = __assign(__assign({}, game.settings), { showMenu: true });
    });
    settingsCloseBtn.addEventListener("click", function () {
        game.settings = __assign(__assign({}, game.settings), { showMenu: false });
    });
    backdrop.addEventListener("click", function () {
        game.settings = __assign(__assign({}, game.settings), { showMenu: false });
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            game.settings = __assign(__assign({}, game.settings), { showMenu: false });
        }
    });
    settingsUpdateBtn.addEventListener("click", function () { return updateSettings(game); });
}
function movementInput(game) {
    document.addEventListener("keydown", function (e) { return movementsHandler(e, game); });
}
function updateSettings(game) {
    game.settings = __assign(__assign({}, game.settings), { snakeSpeed: Number(snakeSpeedInput.value), snakeGrowthRate: Number(snakeGrowthSpeedInput.value), snakeColor: String(snakeColorInput.value), foodColor: String(foodColorInput.value), showMenu: false });
}
function movementsHandler(e, game) {
    switch (e.key) {
        case "ArrowUp":
            if (game.direction.y === 1)
                return;
            game.direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (game.direction.y === -1)
                return;
            game.direction = { x: 0, y: 1 };
            break;
        case "ArrowRight":
            if (game.direction.x === -1)
                return;
            game.direction = { x: 1, y: 0 };
            break;
        case "ArrowLeft":
            if (game.direction.x === 1)
                return;
            game.direction = { x: -1, y: 0 };
            break;
    }
}
//# sourceMappingURL=userInput.js.map