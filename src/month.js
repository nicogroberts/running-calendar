/**
 * A class defining a month object
 */
class Month {
    constructor(name) {
        this.element = document.createElement("div");
        this.element.classList.add("month");
        this.name = name;
        this.element.textContent = name;
        this.cellContainer = document.createElement("div");
        this.cellContainer.classList.add("cell-container");
        this.element.appendChild(this.getContainer());
    }

    getElement() {
        return this.element;
    };

    getContainer() {
        return this.cellContainer;
    };
}

export { Month };