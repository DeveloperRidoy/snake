export type Position = {
    x: number, 
    y: number
}

export type Snake = Position[];

export type Direction = {
    x: 0 | 1 | -1, 
    y: 0 | 1 | -1
}