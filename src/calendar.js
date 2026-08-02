import { Cell } from "./cell";

/**
 * Object containing all the days corresponding to each month
 */
const daysOfTheMonth = {
    Jan: 31,
    Feb: 28,
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    Jul: 31,
    Aug: 31,
    Sep: 30,
    Oct: 31,
    Nov: 30,
    Dec: 31
};

/**
 * An array containing the days of the week
 */
const daysOfTheWeek = ["Mon", "Wed", "Fri"];

/**
 * Object containing all the different colors corresponding to amount of activity levels
 */
const activityStates = {
    None: "#262626",
    Least: "#033a16",
    Less: "#196c2e",
    More: "#2ea043",
    Most: "#55d163"
};

/**
 * A class defining a calendar object
 */
class Calendar {
    constructor(currentDate, parentElement) {
        this.currentDate = currentDate;
        this.parentElement = parentElement;
        this.calendarContainer = document.createElement("div");
        this.calendarContainer.classList.add("calendar-container");
        this.parentElement.appendChild(this.getContainer());
    }

    displayCurrentDate() {
        console.log(this.currentDate);
    };

    getCurrentDate() {
        return this.currentDate;
    };

    getCurrentMonth() {
        return this.currentDate.getMonth();
    };

    getCurrentDay() {
        return this.currentDate.getDate();
    };

    getParentElement() {
        return this.parentElement;
    };

    getContainer() {
        return this.calendarContainer;
    };

    generateDays() {
        const days = document.createElement("div");
        days.classList.add("days");
        daysOfTheWeek.forEach(d => {
            let day = document.createElement("span");
            day.id = d;
            day.textContent = d;
            days.appendChild(day);
        });
        this.getContainer().appendChild(days);
    };

    generateMonths() {
        const months = document.createElement("div");
        months.classList.add("months");
        this.getContainer().appendChild(months);
        return months;
    };

    generateLegend() {
        const legend = document.createElement("div");
        legend.classList.add("legend");
        this.getParentElement().appendChild(legend);
        const lessLabel = document.createElement("span");
        lessLabel.classList.add("less-label");
        lessLabel.textContent = "Less";
        legend.appendChild(lessLabel);
        Object.values(activityStates).forEach(c => {
            // Create cell
            const cell = new Cell(c);
            legend.appendChild(cell.getElement());
        });
        const moreLabel = document.createElement("span");
        moreLabel.classList.add("more-label");
        moreLabel.textContent = "More";
        legend.appendChild(moreLabel);
    };

    getMonthOffset(year, month) {
        return (new Date(year, month, 1).getDay() + 6) % 7;
    };

    addColumn(cellContainer) {
        let col = document.createElement("div");
        col.classList.add("col");
        cellContainer.appendChild(col);
    };

    addMonth(months, index) {
        const month = document.createElement("span");
        month.classList.add("month");
        month.textContent = Object.keys(daysOfTheMonth)[index];
        months.appendChild(month);
        const cellContainer = document.createElement("div");
        cellContainer.classList.add("cell-container");
        month.appendChild(cellContainer);
        return cellContainer;
    }

    generateCalendar() {
        this.generateDays();
        const months = this.generateMonths();
        this.generateLegend();

        for (let i = 0; i <= this.getCurrentMonth(); i++) {

            const cellContainer = this.addMonth(months, i);
            this.addColumn(cellContainer);
        }
    };

    populateCalendar(){};

    getColor(){};
}

export { Calendar };