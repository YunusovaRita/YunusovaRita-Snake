// Яблоко
class Apple {

    constructor() {

        // Начальная позиция яблока
        this.apple = { x: 0, y: 0 };

    }

    // Отрисовка яблока
    draw(playFieldElement, cellSize) {
        
        var element = document.createElement("div");
        element.className = "apple";
        element.style.left = this.apple.x * cellSize + "px";
        element.style.top = this.apple.y * cellSize + "px";
        playFieldElement.appendChild(element);

    }

    // Генерация новой позиции для яблока
    generatePosition(playFieldWidth, playFieldHeight, cellSize) {

        this.apple.x = Math.floor(Math.random() * (playFieldWidth / cellSize));
        this.apple.y = Math.floor(Math.random() * (playFieldHeight / cellSize));

    }
  
    // Проверка позиции яблока (не на змейке)
    checkPosition(snake) {

        for (var i = 0; i < snake.length; i++) {
            if (snake[i].x == this.apple.x && snake[i].y == this.apple.y) {
                return false;
            }
        } 
        return true;

    }
  
}

export default Apple;