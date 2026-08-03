/**
 * A class defining a activity object
 */
class Activity {
    constructor(date, mileage, time, pace) {
        this.date = date;
        this.mileage = mileage;
        this.time = time;
        this.pace = pace;
    }

    getDate() {
        return this.date;
    };

    getMileage() {
        return this.mileage;
    };

    getTime() {
        return this.time;
    };

    getPace() {
        return this.pace;
    };
}

export { Activity };