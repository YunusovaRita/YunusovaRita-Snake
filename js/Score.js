// Табло
class Score {

    constructor() {

        // Ссылка на элемент табло
        this.element = document.getElementById("score");

        // Количество очков
        this.score = 0;

    }

    // Отрисовка табло 
    draw() {

        this.element.textContent = "Очки: " + this.score;

    }

}

export default Score;