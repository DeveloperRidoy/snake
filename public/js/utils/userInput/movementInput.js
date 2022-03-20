import calcSwipeDirection from "../calcSwipeDirection.js";
import { Movement } from "../types.js";
export default function movementInput(game) {
    handleKeyBoardInput(game);
    handleSwipeInput(game);
}
function handleSwipeInput(game) {
    var touchStartX;
    var touchStartY;
    var touchEndX;
    var touchEndY;
    document.addEventListener("touchstart", function (e) {
        touchStartX = e.changedTouches[0].pageX;
        touchStartY = e.changedTouches[0].pageY;
    });
    document.addEventListener("touchend", function (e) {
        touchEndX = e.changedTouches[0].pageX;
        touchEndY = e.changedTouches[0].pageY;
        var movement = calcSwipeDirection({
            touchStartX: touchStartX,
            touchStartY: touchStartY,
            touchEndX: touchEndX,
            touchEndY: touchEndY,
        });
        handleMovement(movement, game);
    });
}
function handleKeyBoardInput(game) {
    document.addEventListener("keydown", function (e) {
        var movement = e.key === "ArrowUp"
            ? Movement.UP
            : e.key === "ArrowDown"
                ? Movement.DOWN
                : e.key === "ArrowLeft"
                    ? Movement.LEFT
                    : e.key === "ArrowRight"
                        ? Movement.RIGHT
                        : null;
        if (movement !== null)
            handleMovement(movement, game);
    });
}
function handleMovement(movement, game) {
    switch (movement) {
        case Movement.UP:
            if (game.direction.y === 1)
                return;
            game.direction = { x: 0, y: -1 };
            break;
        case Movement.DOWN:
            if (game.direction.y === -1)
                return;
            game.direction = { x: 0, y: 1 };
            break;
        case Movement.RIGHT:
            if (game.direction.x === -1)
                return;
            game.direction = { x: 1, y: 0 };
            break;
        case Movement.LEFT:
            if (game.direction.x === 1)
                return;
            game.direction = { x: -1, y: 0 };
            break;
    }
}
//# sourceMappingURL=movementInput.js.map