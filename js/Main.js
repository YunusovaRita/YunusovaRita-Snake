import PlayField from './PlayField.js';
import Snake from './Snake.js';
import Apple from './Apple.js';
import Score from './Score.js';
import BestResult from './BestResult.js';

class Main {

    constructor() {

        this.resetGame();
        this.BestResult = new BestResult();
    }

    // Сброс игры
    resetGame() {

        this.PlayField = new PlayField();
        this.Snake = new Snake();
        this.Apple = new Apple();
        this.Score = new Score();

    }

    // Игровой цикл
    gameLoop() {

        this.PlayField.clear(); // удаление отрисованных элементов
        
        this.Snake.move(this.PlayField.width, this.PlayField.height, this.PlayField.cellSize); // перемещение змейки (обновление данных в массиве координат тела змейки)       

        if (this.Snake.checkCollision()) { // проверка столкновения змейки с собой
            alert(`GAME OVER! Ваш счет: ${this.Score.score}`);
            if (localStorage.getItem('myRes') < this.Score.score) {
                localStorage.setItem('myRes', this.Score.score);
                this.BestResult.draw(localStorage.getItem('myRes')); // отрисовка лучшего результата
            }

            // Сброс игры
            this.resetGame();
            return;
        }
        
        if (this.Snake.checkApple(this.Apple.apple)) { // проверка съела ли змейка яблоко

            this.Score.score += 1; // увеличение количества очков
        
            do {
                this.Apple.generatePosition(this.PlayField.width, this.PlayField.height, this.PlayField.cellSize); // генерация позиции яблока
            } while (!this.Apple.checkPosition(this.Snake.snake)) // проверка корректности позиции яблока
        
        }

        this.Snake.draw(this.PlayField.element, this.PlayField.cellSize); // отрисовка змейки
            
        this.Apple.draw(this.PlayField.element, this.PlayField.cellSize); // отрисовка яблока
    
        this.Score.draw(); // отрисовка табло       

    }

    play() {
        setInterval(() => this.gameLoop(), this.Snake.speed); // игровой цикл с заданным интервалом
    }

}

// Изменение направления движения змейки
function changeDirection(keyCode) {
    // 37: влево, 38: вверх, 39: вправо, 40: вниз
    if (keyCode === 37 && main.Snake.direction !== "right") {
        main.Snake.direction = "left";
    } else if (keyCode === 38 && main.Snake.direction !== "down") {
        main.Snake.direction = "up";
    } else if (keyCode === 39 && main.Snake.direction !== "left") {
        main.Snake.direction = "right";
    } else if (keyCode === 40 && main.Snake.direction !== "up") {
        main.Snake.direction = "down";
    }
};

// Обработка нажатий клавиш
document.addEventListener("keydown", function (event) {
    changeDirection(event.keyCode);
  });

// Запуск игры
const main = new Main();
main.play();

localStorage.removeItem('myRes');
