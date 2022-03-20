// DOM elements
export const gameBoard = document.getElementById("game-board");
export const toggleBtn = document.getElementById("toggle-btn");
export const scoreElement = document.getElementById("score");
export const snakeSpeedInput = document.getElementById("snake-speed") as HTMLInputElement;
export const snakeGrowthSpeedInput = document.getElementById("snake-growth-speed") as HTMLInputElement;
export const snakeColorInput = document.getElementById("snake-color") as HTMLInputElement;
export const foodColorInput = document.getElementById("food-color") as HTMLInputElement;
export const highScoreElement = document.getElementById("high-score");
export const backdrop = document.getElementById("backdrop");
export const settingsMenu = document.getElementById('settings-menu');
export const settingsShowBtn = document.getElementById('settings-show-btn')
export const settingsCloseBtn = document.getElementById('settings-close-btn')
export const settingsUpdateBtn = document.getElementById('settings-update-btn')

// variables
export const GRID_SIZE = 21;
export const SNAKE_SPEED = Number(localStorage.getItem('snake-speed')) || 7;
export const HIGH_SCORE = Number(localStorage.getItem("high-score")) || 0;
export const SNAKE_COLOR = localStorage.getItem("snake-color") || "#00AAFF";
export const FOOD_COLOR = localStorage.getItem("food-color") || "#FFD500";
export const SNAKE_GROWTH_RATE = Number(localStorage.getItem("snake-growth-rate")) || 1;
export const SWIPE_THRESHHOLD = 100;