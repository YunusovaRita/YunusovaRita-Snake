// Змейка
class Snake {

    constructor() {

        // Скорость в мс
        this.speed = 500;

        // Направление движения
        this.direction = "right"; 

        // Начальный набор координат змейки
        this.snake = [
            { x: 3, y: 4 },
            { x: 4, y: 4 },
        ];

    }

    death() {
        // конец игры
    }

    update() {
        // обновление змейки
        // при каких условиях меняться
    }

    // Отрисовка змейки
    draw(playFieldElement, cellSize) {

        for (var i = 0; i < snake.length; i++) {
            var elementPart = document.createElement("div");
            elementPart.className = "snake";
            elementPart.style.left = snake[i].x * cellSize + "px";
            elementPart.style.top = snake[i].y * cellSize + "px";
            playFieldElement.appendChild(elementPart);
          }
          
    }

/*    control() {
        // управление змейкой
        // обработка кнопок на клавиатуре
     // Обработка нажатий клавиш
     document.addEventListener("keydown", function (event) {
        changeDirection(event.keyCode);
    });    }*/

    // Изменение направления движения змейки
    changeDirection(keyCode) {
        // 37: влево, 38: вверх, 39: вправо, 40: вниз
        if (keyCode === 37 && direction !== "right") {
          direction = "left";
        } else if (keyCode === 38 && direction !== "down") {
          direction = "up";
        } else if (keyCode === 39 && direction !== "left") {
          direction = "right";
        } else if (keyCode === 40 && direction !== "up") {
          direction = "down";
        }
    }  

    // Перемещение змейки(обновление данных в массиве координат тела змейки)
    move(playFieldWidth, playFieldHeight, cellSize) {

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
        for (var i = 0; i < this.snake.length; i++) {
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
        }

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

/*   check
        if (checkCollision()) {
            alert(`Ваш счет: ${score}`);
            if (localStorage.getItem('myKey') < score) {
                localStorage.setItem('myKey', score);
                updateBestResult(score);
            }
            // Запускаем новую игру
            resetGame();
        }
  
    }  */
  
 
}

export default Snake;