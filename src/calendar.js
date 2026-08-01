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
        const daysOfTheWeek = ["Mon", "Wed", "Fri"];

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
    };

    generateLegend() {
        const legend = document.createElement("div");
        legend.classList.add("legend");
        this.getParentElement().appendChild(legend);
    };

    getMonthOffset(){};

    generateCalendar() {
        this.generateDays();
        this.generateMonths();
        this.generateLegend();
    };

    populateCalendar(){};

    getColor(){};
}

export { Calendar };