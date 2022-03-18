import { defaultDirection, defaultFood, defaultSnake, gameBoard, GRID_SIZE } from "./config.js";
import {
  generateFood,
  generateSnake,
  isOutsideGrid,
  snakeIntersect,
} from "./utils/functions.js";
import { Position } from "./utils/types.js";

export default class Game {
  private _food: Position = defaultFood;
  private _direction: Position = defaultDirection;
  private _snake: Position[] = defaultSnake;
  private _gameOver: boolean = false;

  constructor() {
    gameBoard.style.setProperty("--grid-size", String(GRID_SIZE));
    generateSnake(this._snake);
    this.randomlyChangeFoodPosition();
    generateFood(this._food);
  }

  update() {
    if (this.snakeOnPosition(this._food)) {
      this.growSnake();
      this.randomlyChangeFoodPosition();
    }

    for (let i = 1; i < this._snake.length; i++) {
      this._snake[i - 1] = { ...this._snake[i] };
    }
    this._snake[this._snake.length - 1].x += this._direction.x;
    this._snake[this._snake.length - 1].y += this._direction.y;

    this.handleGameOver();
  }

  get direction() {
    return this._direction;
  }

  set direction({ x, y }: Position) {
    this._direction.x = x;
    this._direction.y = y;
  }

  get gameOver() {
    return this._gameOver;
  }

  get snake() {
    return this._snake;
  }

  get food() {
    return this._food;
  }

  private growSnake() {
    const lastPart = this._snake[0];
    this._snake.unshift(lastPart);
  }

  private snakeOnPosition(position: Position) {
    return this._snake.some(
      (part) => part.x === position.x && part.y === position.y
    );
  }

  private randomlyChangeFoodPosition() {
    let position: Position = null;
    while (position === null || this.snakeOnPosition(position)) {
      position = {
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1,
      };
    }

    this._food = position;
  }

  private handleGameOver() {
    if (isOutsideGrid(this._snake) || snakeIntersect(this._snake)) {
      this._gameOver = true;
    }
  }
}
