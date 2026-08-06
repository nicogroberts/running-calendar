import { Cell } from "./cell";
import { Month } from "./month";
import { Column } from "./column";

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
        console.log(`Current Date: ${this.currentDate}, Month: ${this.getCurrentMonth()}, Day: ${this.getCurrentDay()}`);
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
        const col = new Column();
        cellContainer.appendChild(col.getElement());
        return col.getElement();
    };

    addMonth(months, index) {
        const month = new Month(Object.keys(daysOfTheMonth)[index]);
        months.appendChild(month.getElement());
        const cellContainer = month.getContainer();
        return cellContainer;
    };

    addCell(col, color) {
        const cell = new Cell(color);
        col.appendChild(cell.getElement());
    };

    generateCalendar() {
        const year = new Date().getFullYear();

        this.generateDays();
        const months = this.generateMonths();
        this.generateLegend();

        for (let i = 0; i <= this.getCurrentMonth(); i++) {
            const cellContainer = this.addMonth(months, i);
            let col = this.addColumn(cellContainer);

            let dayCounter = this.getMonthOffset(year, i);

            for (let j = 0; j < dayCounter; j++) {
                // Add empty cells
                const color = "#1e1e1e";
                this.addCell(col, color);
            }

            const daysToGenerate = i === this.getCurrentMonth() ? this.getCurrentDay() : Object.values(daysOfTheMonth)[i];

            for (let j = 0; j < daysToGenerate; j++) {
                const color = "#262626";
                this.addCell(col, color);
                dayCounter++;

                if (dayCounter === 7) {
                    col = this.addColumn(cellContainer);
                    dayCounter = 0;
                }
            }
        }
    };

    populateCalendar(activities) {
        const trainingValues = []; 

        activities.forEach(activity => {
            const date = activity.getDate();
            const minutes = this.toMinutes(activity.getTime()).toFixed(2);
            const miles = activity.getMileage();
            const trainingLoad = minutes * miles;
            trainingValues.push(trainingLoad);
        });

        const max = Math.max(...trainingValues);
        
        const normalized = trainingValues.map(value => value / max);

        console.log(normalized);
    };

    getColor() {};

    toMinutes(time) {
        const parts = time.split(":").map(Number);

        if (parts.length === 3) {
            return parts[0] * 60 + parts[1] + parts[2] / 60;
        } else if (parts.length === 2) {
            return parts[0] + parts[1] / 60;
        } else {
            return 0;
        }
    };
}

export { Calendar };