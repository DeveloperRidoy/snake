import { Movement } from "./types";
export default function calcSwipeDirection(_a) {
    var touchStartX = _a.touchStartX, touchEndX = _a.touchEndX, touchStartY = _a.touchStartY, touchEndY = _a.touchEndY;
    return Math.abs(touchEndX - touchStartX) > Math.abs(touchEndY - touchStartY)
        ? touchEndX > touchStartX
            ? Movement.RIGHT
            : Movement.LEFT
        : touchEndY > touchStartY
            ? Movement.DOWN
            : Movement.UP;
}
//# sourceMappingURL=calcSwipeDirection.js.map