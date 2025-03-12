// Змейка
class Snake {

    constructor() {

        // Скорость в мс
        this.speed = 500;

        // Направление движения
        this.direction = "right"; 

        // Начальный набор координат змейки
        this.snake = [
            { x: 4, y: 4 },
            { x: 3, y: 4 },
        ];

    }

    // Отрисовка змейки
    draw(playFieldElement, cellSize) {

        for (var i = 0; i < this.snake.length; i++) {
            var elementPart = document.createElement("div");
            elementPart.className = "snake";
            elementPart.style.left = this.snake[i].x * cellSize + "px";
            elementPart.style.top = this.snake[i].y * cellSize + "px";
            playFieldElement.appendChild(elementPart);
        }
          
    } 

    // Перемещение змейки(обновление данных в массиве координат тела змейки)
    move(playFieldWidth, playFieldHeight, cellSize) {
        alert(this.snake.length);
        var head = { x: this.snake[0].x, y: this.snake[0].y }; // координаты головы змейки
  
        // Изменение координат головы в зависимости от направления
        if (this.direction === "right") {
            head.x++;
        } else if (this.direction === "left") {
            head.x--;
        } else if (this.direction === "up") {
            head.y--;
        } else if (this.direction === "down") {
            head.y++;
        }
    
        // Добавление новой головы в начало змейки (в массив координат)
        this.snake.unshift(head);
  
        // Проверка столкновения со стеной (смена координат для появления змейки с другой стороны поля)
        // Перебор всех клеток змейки
/*        for (var i = 0; i < this.snake.length; i++) {
            if  (this.snake[i].x < 0) {
                this.snake[i].x = playFieldWidth / cellSize - 1;
            } else if (this.snake[i].x >= playFieldWidth / cellSize) {
                this.snake[i].x = 0;  
            }
            if (this.snake[i].y < 0) {
                this.snake[i].y = playFieldHeight / cellSize - 1;
            } else if (this.snake[i].y >= playFieldHeight / cellSize) {
                this.snake[i].y = 0;  
            }    
        }*/

    }
  
    // Проверка, съела ли змейка яблоко
    checkApple(apple) {
        head = { x: this.snake[0].x, y: this.snake[0].y };
        
        if (head.x === apple.x && head.y === apple.y) {
            // Необходимо генерировать новую позицию для яблока И увеличивать счет, если змейка съела яблоко
            return true;
            } else {
            // Удаление хвоста, если змейка не съела яблоко
            this.snake.pop();
            return false;
        }
    }

    // Проверка столкновения змейки с собой
    checkCollision() {
        var head = this.snake[0];
  
        for (var i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                return true;
            }
        }
  
        return false;

    }  
 
}

export default Snake;