export type Position = {
    x: number, 
    y: number
}

export type Snake = Position[];

export type Direction = {
    x: 0 | 1 | -1, 
    y: 0 | 1 | -1
}


export type Settings = {
  gridSize: number,
  showMenu: boolean,
  snakeSpeed: number;
  snakeGrowthRate: number;
  snakeColor: string;
  foodColor: string;
};

export enum Movement {
    UP = 'UP', 
    DOWN = 'DOWN', 
    LEFT = 'LEFT', 
    RIGHT = 'RIGHT'
}

export type SwipeDirectionProps = {
  touchStartX: number;
  touchEndX: number;
  touchStartY: number;
  touchEndY: number;
};