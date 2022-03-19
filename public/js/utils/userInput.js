import { toggleBtn } from "../config.js";
export default function userInput(game) {
    document.addEventListener('keydown', inputHandler);
    toggleBtn.addEventListener('click', function () {
        game.gameOver = game.gameOver ? false : true;
    });
    function inputHandler(e) {
        switch (e.key) {
            case "ArrowUp":
                if (game.direction.y === 1)
                    return;
                game.direction = { x: 0, y: -1 };
                break;
            case "ArrowDown":
                if (game.direction.y === -1)
                    return;
                game.direction = { x: 0, y: 1 };
                break;
            case "ArrowRight":
                if (game.direction.x === -1)
                    return;
                game.direction = { x: 1, y: 0 };
                break;
            case "ArrowLeft":
                if (game.direction.x === 1)
                    return;
                game.direction = { x: -1, y: 0 };
                break;
        }
    }
}
//# sourceMappingURL=userInput.js.map