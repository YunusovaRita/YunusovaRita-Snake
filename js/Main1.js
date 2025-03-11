// Скорость змейки в мс
var snakeSpeed = 500;

// Получаем ссылку на игровое поле
var playField = document.getElementById("playField");

// Размеры игрового поля
var playFieldWidth = 500;
var playFieldHeight = 500;

// Размеры ячейки
var cellSize = 50;

// Инициализация змейки
var snake = [
  { x: 3, y: 4 },
  { x: 4, y: 4 },
];

// Инициализация позиции яблока
var apple = { x: 0, y: 0 };

// Количество очков
var score = 0;

let myKey = localStorage.getItem('myKey');

// Рисуем змейку
function drawSnake() {
  for (var i = 0; i < snake.length; i++) {
    var snakePart = document.createElement("div");
    snakePart.className = "snake";
    snakePart.style.left = snake[i].x * cellSize + "px";
    snakePart.style.top = snake[i].y * cellSize + "px";
    playField.appendChild(snakePart);
  }
}

// Рисуем яблоко
function drawApple() {
  var appleElement = document.createElement("div");
  appleElement.className = "apple";
  appleElement.style.left = apple.x * cellSize + "px";
  appleElement.style.top = apple.y * cellSize + "px";
  playField.appendChild(appleElement);
}

// Удаляем предыдущие отрисованные элементы
function clearPlayField() {
  while (playField.firstChild) {
    playField.removeChild(playField.firstChild);
  }
}

// Выводим количество очков
function updateScore() {
  var scoreElement = document.getElementById("score");
  scoreElement.textContent = "Очки: " + score;
}

// Выводим лучший результат
function updateBestResult(bestResult) {
  var bestResultElement = document.getElementById("bestResult");
  bestResultElement.textContent = "Лучший результат: " + bestResult;
}

// Игровой цикл
function gameLoop() {
  clearPlayField();
  moveSnake();
  drawSnake();
  drawApple();
  updateScore();
}

// Обработка нажатий клавиш
document.addEventListener("keydown", function (event) {
  changeDirection(event.keyCode);
});

// Изменение направления движения змейки
function changeDirection(keyCode) {
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

// Перемещение змейки
function moveSnake() {
  var head = { x: snake[0].x, y: snake[0].y };

  // Изменяем координаты головы в зависимости от направления
  if (direction === "right") {
    head.x++;
  } else if (direction === "left") {
    head.x--;
  } else if (direction === "up") {
    head.y--;
  } else if (direction === "down") {
    head.y++;
  }
  
  // Добавляем новую голову в начало змейки
  snake.unshift(head);

  // проверка столкновения со стеной
  for (var i = 0; i < snake.length; i++) {
    if (snake[i].x < 0) {
      snake[i].x = playFieldWidth / cellSize - 1;
    } else if (snake[i].x >= playFieldWidth / cellSize) {
      snake[i].x = 0;  
    }
    if (snake[i].y < 0) {
      snake[i].y = playFieldHeight / cellSize - 1;
    } else if (snake[i].y >= playFieldHeight / cellSize) {
      snake[i].y = 0;  
    }    
  }

  // Проверяем, если змейка съела яблоко
  head = { x: snake[0].x, y: snake[0].y };
  if (head.x === apple.x && head.y === apple.y) {
    // Генерируем новую позицию для яблока
    do {
      generateApple();
    } while (!checkApple());
    // Увеличиваем счетчик на 1
    score += 1;
  } else {
    // Если змейка не съела яблоко, удаляем хвост
    snake.pop();
  }

  // Проверяем, если змейка столкнулась с собой или со стеной
  if (checkCollision()) {
    alert(`Ваш счет: ${score}`);
    if (localStorage.getItem('myKey') < score) {
      localStorage.setItem('myKey', score);
      updateBestResult(score);
    }
    // Запускаем новую игру
    resetGame();
  }

}

// Генерация новой позиции для яблока
function generateApple() {
  apple.x = Math.floor(Math.random() * (playFieldWidth / cellSize));
  apple.y = Math.floor(Math.random() * (playFieldHeight / cellSize));
}

// проверка позиции яблока (не на змейке)
function checkApple() {
  for (var i = 0; i < snake.length; i++) {
    if (snake[i].x == apple.x && snake[i].y == apple.y)
      return false;
  }

  return true;
}

// Проверка столкновения змейки
function checkCollision() {
  var head = snake[0];

  // Проверяем, если змейка столкнулась с собой
  for (var i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  return false;
}

// столкновение со стеной
function meetWall() {
  var head = snake[0];

  if (head.x < 0) {
    head.x = playFieldWidth / cellSize;
  } else if (head.x >= playFieldWidth / cellSize) {
    head.x = 0;
  }

  if (head.y < 0) {
    head.y = playFieldHeight / cellSize;
  } else if (head.y >= playFieldHeight / cellSize) {
    head.y = 0;
  }
}

// Сброс игры
function resetGame() {
  snake = [
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
  ];
  direction = "right";
  generateApple();
  // Обнуляем количество очков
  score = 0;
}

// Запуск игры
var direction = "right";
setInterval(gameLoop, snakeSpeed);