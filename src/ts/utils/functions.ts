import { gameBoard, GRID_SIZE } from "../config.js";
import Game from "../Game.js";
import { Position } from "./types.js";

export function generateSnake(snake: Position[]) {
    snake.forEach(position => {
        generateElement(position.x, position.y, 'snake');
    })
} 

export function generateFood(position: Position) {
   generateElement(position.x, position.y, 'food');
}


function generateElement(x: number, y: number, className: string) {
    const bodyElement = document.createElement("div");
    bodyElement.classList.add(className);
    bodyElement.style.gridRowStart = String(y);
    bodyElement.style.gridColumnStart = String(x);
    gameBoard.append(bodyElement);
}



export function isOutsideGrid(snake: Position[]) {
    return snake.some(part => part.x < 1 || part.y < 1 || part.x > GRID_SIZE || part.y > GRID_SIZE);
 }

export function snakeIntersect(snake: Position[]) {
    if (snake.length === 1) return false;
    const headIndex = snake.length - 1;
    const snakeHead = snake[headIndex];
    return snake.some((part, i) => i < headIndex &&  part.x === snakeHead.x && part.y === snakeHead.y);
}