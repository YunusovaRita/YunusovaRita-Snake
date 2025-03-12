// Лучший результат
class BestResult {

    constructor() {

        // Ссылка на элемент лучшего результата
        this.element = document.getElementById("bestResult");
        
        // Хранение в памяти
        this.myRes = localStorage.getItem('myRes');
    }

    // Отрисовка лучшего результата
    draw(bestResult) {
        
        this.element.textContent = "Лучший результат: " + bestResult;

    }   

}

export default BestResult;