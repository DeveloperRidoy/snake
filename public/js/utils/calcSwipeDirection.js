import { SWIPE_THRESHHOLD } from "../config.js";
import { Movement } from "./types.js";
export default function calcSwipeDirection(_a) {
    var touchStartX = _a.touchStartX, touchEndX = _a.touchEndX, touchStartY = _a.touchStartY, touchEndY = _a.touchEndY;
    var movementX = Math.abs(touchEndX - touchStartX);
    var movementY = Math.abs(touchEndY - touchStartY);
    if (movementX < SWIPE_THRESHHOLD && movementY < SWIPE_THRESHHOLD)
        return null;
    return movementX > movementY
        ? touchEndX > touchStartX
            ? Movement.RIGHT
            : Movement.LEFT
        : touchEndY > touchStartY
            ? Movement.DOWN
            : Movement.UP;
}
//# sourceMappingURL=calcSwipeDirection.js.map