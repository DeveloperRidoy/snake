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
import { FOOD_COLOR, gameBoard, GRID_SIZE, HIGH_SCORE, SNAKE_COLOR } from "./config.js";
import { updateFoodUI, updateSnakeUI, isOutsideGrid, randomPosition, snakeIntersect, updateScoreUI, updateButtonUI, randomDirection, randomEmptyPosition, } from "./utils/functions.js";
var Game = (function () {
    function Game() {
        this._gameOver = true;
        this.reset();
    }
    Game.prototype.updateLogic = function () {
        if (this.snakeOnPosition(this._food)) {
            this.growSnake();
            this._food = randomEmptyPosition(this._snake);
            this._score += 1;
            if (this._score > this._highScore) {
                this._highScore = this._score;
                localStorage.setItem("high-score", String(this._highScore));
            }
        }
        for (var i = 1; i < this._snake.length; i++) {
            this._snake[i - 1] = __assign({}, this._snake[i]);
        }
        this._snake[this._snake.length - 1].x += this._direction.x;
        this._snake[this._snake.length - 1].y += this._direction.y;
        this.handleGameOver();
    };
    Object.defineProperty(Game.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (_a) {
            var x = _a.x, y = _a.y;
            this._direction.x = x;
            this._direction.y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "gameOver", {
        get: function () {
            return this._gameOver;
        },
        set: function (bool) {
            this._gameOver = bool;
            updateButtonUI(this._gameOver);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "snake", {
        get: function () {
            return this._snake;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "food", {
        get: function () {
            return this._food;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.growSnake = function () {
        var lastPart = __assign({}, this._snake[0]);
        this._snake.unshift(lastPart);
    };
    Game.prototype.snakeOnPosition = function (position) {
        return this._snake.some(function (part) { return part.x === position.x && part.y === position.y; });
    };
    Game.prototype.handleGameOver = function () {
        if (isOutsideGrid(this._snake) || snakeIntersect(this._snake)) {
            this._gameOver = true;
        }
    };
    Game.prototype.resetLogic = function () {
        gameBoard.style.setProperty("--grid-size", String(GRID_SIZE));
        gameBoard.style.setProperty("--snake-color", String(SNAKE_COLOR));
        gameBoard.style.setProperty("--food-color", String(FOOD_COLOR));
        this._direction = randomDirection();
        this._snake = [randomPosition()];
        this._food = randomEmptyPosition(this._snake);
        this._score = 0;
        this._highScore = HIGH_SCORE;
    };
    Game.prototype.updateUI = function () {
        updateSnakeUI(this._snake);
        updateFoodUI(this._food);
        updateScoreUI(this._score, this._highScore);
        updateButtonUI(this._gameOver);
    };
    Game.prototype.reset = function () {
        this.resetLogic();
        this.updateUI();
    };
    return Game;
}());
export default Game;
//# sourceMappingURL=Game.js.map