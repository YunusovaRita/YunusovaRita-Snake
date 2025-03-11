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

 /*   increase() {
        // увеличение кол-ва очков
        // перерисовка табло (не полная)
        this._score =+ 1;
    }*/

 /*   reset() {
        // сброс очков
        this._score = 0;
    }*/

}

export default Score;