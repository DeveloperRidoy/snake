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
import { backdrop, foodColorInput, settingsCloseBtn, settingsShowBtn, settingsUpdateBtn, snakeColorInput, snakeGrowthSpeedInput, snakeSpeedInput, } from "../../config.js";
export default function settingsInput(game) {
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
function updateSettings(game) {
    game.settings = __assign(__assign({}, game.settings), { snakeSpeed: Number(snakeSpeedInput.value), snakeGrowthRate: Number(snakeGrowthSpeedInput.value), snakeColor: String(snakeColorInput.value), foodColor: String(foodColorInput.value), showMenu: false });
}
//# sourceMappingURL=settingsInput.js.map