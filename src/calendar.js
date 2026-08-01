/**
 * A class defining a calendar object
 */
class Calendar {
    constructor(currentDate, parentElement) {
        this.currentDate = currentDate;
        this.parentElement = this.parentElement;
        const calendarContainer = document.createElement("div");
        calendarContainer.classList.add("calendar-container");
        this.parentElement.appendChild(calendarContainer);
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
    }

    getParentElement() {
        return this.parentElement;
    }

    getContainer() {
        return calendarContainer;
    }

    getMonthOffset(){};

    generateCalendar() {
        
    };

    generateDayLabels(){};

    generateLegend(){};

    populateCalendar(){};

    getColor(){};
}

export { Calendar };