import {
  backdrop,
  foodColorInput,
  FOOD_COLOR,
  gameBoard,
  GRID_SIZE,
  HIGH_SCORE,
  settingsMenu,
  snakeColorInput,
  snakeGrowthSpeedInput,
  snakeSpeedInput,
  SNAKE_COLOR,
  SNAKE_GROWTH_RATE,
  SNAKE_SPEED,
} from "./config.js";
import {
  updateFoodUI,
  updateSnakeUI,
  isOutsideGrid,
  snakeIntersect,
  updateScoreUI,
  updateButtonUI,
  randomEmptyPosition,
} from "./utils/functions.js";
import { Direction, Position, Settings, Snake } from "./utils/types.js";

export default class Game {
  private _direction: Direction;
  private _snake: Snake;
  private _food: Position;
  private _gameOver: boolean = true;
  private _score: number;
  private _highScore: number;
  private _settings: Settings;

  constructor() {
    // set game logic and UI on first initialization
    this.reset();
  }

  updateLogic() {
    // handle eating food
    if (this.snakeOnPosition(this._food)) {
      // grow snake
      this.growSnake(this.settings.snakeGrowthRate);

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

  get settings() {
    return this._settings;
  }

  set settings(settings: Settings) {
    // update settings info
    this._settings = settings;

    const {
      gridSize,
      snakeColor,
      foodColor,
      snakeSpeed,
      snakeGrowthRate,
      showMenu,
    } = settings;
    // update related DOM elements
    gameBoard.style.setProperty("--grid-size", String(gridSize));
    gameBoard.style.setProperty("--snake-color", String(snakeColor));
    gameBoard.style.setProperty("--food-color", String(foodColor));

    snakeSpeedInput.value = String(snakeSpeed);
    snakeGrowthSpeedInput.value = String(snakeGrowthRate);
    snakeColorInput.value = String(snakeColor);
    foodColorInput.value = String(foodColor);

    if (showMenu) {
      settingsMenu.classList.remove("hidden");
      backdrop.classList.remove("hidden");
    } else {
      settingsMenu.classList.add("hidden");
      backdrop.classList.add("hidden");
    }

    // update settings in localStorage
    localStorage.setItem("snake-speed", String(snakeSpeed));
    localStorage.setItem("snake-growth-rate", String(snakeGrowthRate));
    localStorage.setItem("snake-color", String(snakeColor));
    localStorage.setItem("food-color", String(foodColor));
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

  private growSnake(growthRate: number) {
    const lastPart = { ...this._snake[0] };
    for (let i = 1; i <= growthRate; i++) {
      this._snake.unshift(lastPart);
    }
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
    this.settings = {
      gridSize: GRID_SIZE,
      showMenu: false,
      snakeGrowthRate: SNAKE_GROWTH_RATE,
      snakeSpeed: SNAKE_SPEED,
      snakeColor: SNAKE_COLOR,
      foodColor: FOOD_COLOR,
    };

    this._direction = { x: 1, y: 0 };
    this._snake = [{ x: 11, y: 11 }];
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
