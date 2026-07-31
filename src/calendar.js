/**
 * A class defining a calendar object
 */
class Calendar {
    constructor(currentDate) {
        this.currentDate = currentDate;
    }

    displayCurrentDate() {
        console.log(this.currentDate);
    };

    getMonthOffset(){};

    generateCalendar(){};

    generateDayLabels(){};

    generateLegend(){};

    populateCalendar(){};

    getColor(){};
}

export { Calendar };