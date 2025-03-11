// Лучший результат
class BestResult {

    constructor() {

        // Ссылка на элемент лучшего результата
        this.element = document.getElementById("bestResult");

        // Лучший результат
        this.bestResult = localStorage.getItem('myRes');
    }

    // Отрисовка лучшего результата
    draw() {
        
        this.element.textContent = "Лучший результат: " + this.bestResult;

    }   

}

export default BestResult;