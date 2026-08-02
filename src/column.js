/**
 * A class defining a column object
 */
class Column {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("col");

    }

    getElement() {
        return this.element;
    };
}

export { Column };