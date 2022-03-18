import { gameBoard, GRID_SIZE } from "../config.js";
export function generateSnake(snake) {
    snake.forEach(function (position) {
        generateElement(position.x, position.y, 'snake');
    });
}
export function generateFood(position) {
    generateElement(position.x, position.y, 'food');
}
function generateElement(x, y, className) {
    var bodyElement = document.createElement("div");
    bodyElement.classList.add(className);
    bodyElement.style.gridRowStart = String(y);
    bodyElement.style.gridColumnStart = String(x);
    gameBoard.append(bodyElement);
}
export function isOutsideGrid(snake) {
    return snake.some(function (part) { return part.x < 1 || part.y < 1 || part.x > GRID_SIZE || part.y > GRID_SIZE; });
}
export function snakeIntersect(snake) {
    if (snake.length === 1)
        return false;
    var headIndex = snake.length - 1;
    var snakeHead = snake[headIndex];
    return snake.some(function (part, i) { return i < headIndex && part.x === snakeHead.x && part.y === snakeHead.y; });
}
//# sourceMappingURL=functions.js.map