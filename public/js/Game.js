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
import { defaultDirection, defaultFood, defaultSnake, gameBoard, GRID_SIZE } from "./config.js";
import { generateFood, generateSnake, isOutsideGrid, snakeIntersect, } from "./utils/functions.js";
var Game = (function () {
    function Game() {
        this._food = defaultFood;
        this._direction = defaultDirection;
        this._snake = defaultSnake;
        this._gameOver = false;
        gameBoard.style.setProperty("--grid-size", String(GRID_SIZE));
        generateSnake(this._snake);
        this.randomlyChangeFoodPosition();
        generateFood(this._food);
    }
    Game.prototype.update = function () {
        if (this.snakeOnPosition(this._food)) {
            this.growSnake();
            this.randomlyChangeFoodPosition();
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
    Object.defineProperty(Game.prototype, "gameOver", {
        get: function () {
            return this._gameOver;
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
        var lastPart = this._snake[0];
        this._snake.unshift(lastPart);
    };
    Game.prototype.snakeOnPosition = function (position) {
        return this._snake.some(function (part) { return part.x === position.x && part.y === position.y; });
    };
    Game.prototype.randomlyChangeFoodPosition = function () {
        var position = null;
        while (position === null || this.snakeOnPosition(position)) {
            position = {
                x: Math.floor(Math.random() * 21) + 1,
                y: Math.floor(Math.random() * 21) + 1,
            };
        }
        this._food = position;
    };
    Game.prototype.handleGameOver = function () {
        if (isOutsideGrid(this._snake) || snakeIntersect(this._snake)) {
            this._gameOver = true;
        }
    };
    return Game;
}());
export default Game;
//# sourceMappingURL=Game.js.map