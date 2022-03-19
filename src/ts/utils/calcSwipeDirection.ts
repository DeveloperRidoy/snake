import { Movement, SwipeDirectionProps } from "./types";

export default function calcSwipeDirection({
  touchStartX,
  touchEndX,
  touchStartY,
  touchEndY,
}: SwipeDirectionProps) {
  return Math.abs(touchEndX - touchStartX) > Math.abs(touchEndY - touchStartY)
    ? touchEndX > touchStartX
      ? Movement.RIGHT
      : Movement.LEFT
    : touchEndY > touchStartY
    ? Movement.DOWN
    : Movement.UP;
}
