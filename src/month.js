class Month {
    constructor(name) {
        this.element = document.createElement("div");
        this.element.classList.add("month");
        this.name = name;
        this.element.textContent = name;
    }

    getElement() {
        return this.element;
    }
}

export { Month };