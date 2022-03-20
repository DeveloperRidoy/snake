import { SWIPE_THRESHHOLD } from "../config.js";
import { Movement, SwipeDirectionProps } from "./types.js";

export default function calcSwipeDirection({
  touchStartX,
  touchEndX,
  touchStartY,
  touchEndY,
}: SwipeDirectionProps): Movement | null {
  const movementX = Math.abs(touchEndX - touchStartX);
  const movementY = Math.abs(touchEndY - touchStartY);
  if (movementX < SWIPE_THRESHHOLD && movementY < SWIPE_THRESHHOLD) return null;
  return movementX > movementY
    ? touchEndX > touchStartX
      ? Movement.RIGHT
      : Movement.LEFT
    : touchEndY > touchStartY
    ? Movement.DOWN
    : Movement.UP;
}
