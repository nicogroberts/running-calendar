/**
 * A class defining a cell object
 */
class Cell {
    constructor(color) {
        this.element = document.createElement("div");
        this.element.classList.add("cell");
        this.color = color;
        this.element.style.backgroundColor = this.color;
        
    }

    setColor(c) {
        this.color = c;
        this.element.style.backgroundColor = this.color;
    };

    getElement() {
        return this.element;
    };
}

export { Cell };