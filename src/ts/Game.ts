import { FOOD_COLOR, gameBoard, GRID_SIZE, HIGH_SCORE, SNAKE_COLOR } from "./config.js";
import {
  updateFoodUI,
  updateSnakeUI,
  isOutsideGrid,
  randomPosition,
  snakeIntersect,
  updateScoreUI,
  updateButtonUI,
  randomDirection,
  randomEmptyPosition,
} from "./utils/functions.js";
import { Direction, Position, Snake } from "./utils/types.js";

export default class Game {
  private _direction: Direction;
  private _snake: Snake;
  private _food: Position;
  private _gameOver: boolean = true;
  private _score: number;
  private _highScore: number;

  constructor() {
    // set game logic and UI on first initialization
    this.reset();
  }

  updateLogic() {
    // handle eating food
    if (this.snakeOnPosition(this._food)) {
      // grow snake
      this.growSnake();

      // change food position after eating food
      this._food = randomEmptyPosition(this._snake);

      // update score
      this._score += 1;

      // update high score if exceeds current
      if (this._score > this._highScore) {
        this._highScore = this._score;
        localStorage.setItem("high-score", String(this._highScore));
      }
    }

    // update snake position
    for (let i = 1; i < this._snake.length; i++) {
      this._snake[i - 1] = { ...this._snake[i] };
    }
    this._snake[this._snake.length - 1].x += this._direction.x;
    this._snake[this._snake.length - 1].y += this._direction.y;

    // handle game over for current snake position
    this.handleGameOver();
  }

  get direction() {
    return this._direction;
  }

  set direction({ x, y }: Direction) {
    this._direction.x = x;
    this._direction.y = y;
  }

  get score() {
    return this._score;
  }

  get gameOver() {
    return this._gameOver;
  }

  set gameOver(bool) {
    this._gameOver = bool;
    updateButtonUI(this._gameOver);
  }

  get snake() {
    return this._snake;
  }

  get food() {
    return this._food;
  }

  private growSnake() {
    const lastPart = { ...this._snake[0] };
    this._snake.unshift(lastPart);
  }

  private snakeOnPosition(position: Position) {
    return this._snake.some(
      (part) => part.x === position.x && part.y === position.y
    );
  }

  private handleGameOver() {
    if (isOutsideGrid(this._snake) || snakeIntersect(this._snake)) {
      this._gameOver = true;
    }
  }

  private resetLogic() {
    gameBoard.style.setProperty("--grid-size", String(GRID_SIZE));
    gameBoard.style.setProperty("--snake-color", String(SNAKE_COLOR));
    gameBoard.style.setProperty("--food-color", String(FOOD_COLOR));
    this._direction = randomDirection();
    this._snake = [randomPosition()];
    this._food = randomEmptyPosition(this._snake);
    this._score = 0;
    this._highScore = HIGH_SCORE;
  }

  // update UI
  updateUI() {
    // update snake position
    updateSnakeUI(this._snake);

    // update food position
    updateFoodUI(this._food);

    // update score
    updateScoreUI(this._score, this._highScore);

    // update start/stop button
    updateButtonUI(this._gameOver);
  }

  reset() {
    this.resetLogic();
    this.updateUI();
  }
}
