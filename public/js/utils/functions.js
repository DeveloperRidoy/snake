import { gameBoard, GRID_SIZE, highScoreElement, ScoreElement, toggleBtn, } from "../config.js";
export function updateSnakeUI(snake) {
    snake.forEach(function (position) {
        generateElement(position.x, position.y, "snake");
    });
}
export function updateFoodUI(position) {
    generateElement(position.x, position.y, "food");
}
function generateElement(x, y, className) {
    var bodyElement = document.createElement("div");
    bodyElement.classList.add(className);
    bodyElement.style.gridRowStart = String(y);
    bodyElement.style.gridColumnStart = String(x);
    gameBoard.append(bodyElement);
}
export function isOutsideGrid(snake) {
    return snake.some(function (part) {
        return part.x < 1 || part.y < 1 || part.x > GRID_SIZE || part.y > GRID_SIZE;
    });
}
export function snakeIntersect(snake) {
    if (snake.length === 1)
        return false;
    var headIndex = snake.length - 1;
    var snakeHead = snake[headIndex];
    return snake.some(function (part, i) {
        return i < headIndex && part.x === snakeHead.x && part.y === snakeHead.y;
    });
}
export function updateScoreUI(score, highScore) {
    ScoreElement.innerText = String(score);
    highScoreElement.innerText = String(highScore);
}
export var randomPosition = function () {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
    };
};
export var snakeOnPosition = function (snake, position) {
    return snake.some(function (part) { return part.x === position.x && part.y === position.y; });
};
export var randomEmptyPosition = function (snake) {
    var position = null;
    while (position === null || snakeOnPosition(snake, position)) {
        position = randomPosition();
    }
    return position;
};
export var updateButtonUI = function (gameOver) {
    toggleBtn.innerText = gameOver ? "start" : "stop";
};
export function randomDirection() {
    var dir1 = { x: 1, y: 0 };
    var dir2 = { x: -1, y: 0 };
    var dir3 = { x: 0, y: -1 };
    var dir4 = { x: 0, y: 1 };
    var toss = Math.floor(Math.random() * 4) + 1;
    var randDirection = toss === 1
        ? dir1
        : toss === 2
            ? dir2
            : toss === 3
                ? dir3
                : toss === 4 && dir4;
    return randDirection;
}
//# sourceMappingURL=functions.js.map