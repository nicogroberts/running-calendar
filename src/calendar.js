/**
 * A class defining a calendar object
 */
class Calendar {
    constructor(currentDate, mainElement) {
        this.currentDate = currentDate;
        this.mainElement = this.mainElement;
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

    getMainElement() {
        return this.mainElement;
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