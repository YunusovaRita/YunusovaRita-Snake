// Игровое поле
class PlayField {

    constructor() {

        // Ссылка на элемент игрового поля
        this.element = document.getElementById("playField"); 
        
        // Размеры игрового поля
        this.width = 500;
        this.height = 500;

        // Размеры ячейки
        this.cellSize = 50;

    }

    // Удаление предыдущих отрисованных элементов на игровом поле
    clear() {
        
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        
    }
}

export default PlayField;